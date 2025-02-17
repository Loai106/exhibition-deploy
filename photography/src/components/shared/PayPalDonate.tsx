import {
  Box,
  Modal,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import { BASE_URL, CLIENT_ID_PAYPAL } from "../../types";
import { CheckCircle, ErrorOutline, AttachMoney } from "@mui/icons-material";

interface PayPalDonateProps {
  open: boolean;
  handleClose: () => void;
  paintingId: string | number;
}

const PayPalDonate = ({ open, handleClose, paintingId }: PayPalDonateProps) => {
  const [amount, setAmount] = useState<number>(10);
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isNameValid = name.trim() !== "";
  const isFormValid = name.trim() !== "" && isEmailValid && amount > 0;

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            minHeight: 200,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 5,
            borderRadius: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {showThankYou ? (
            <Typography variant="h4" fontWeight="bold" color="green">
              🎉 Thank you for your support! 🎨
            </Typography>
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {"Support the Artist 🎨"}
              </Typography>

              {/* Name Input */}
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                helperText={!isNameValid ? "Name is required" : ""}
                sx={{ borderRadius: "8px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Email Input */}
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                error={!isEmailValid && email.trim() !== ""}
                helperText={
                  !isEmailValid && email.trim() !== ""
                    ? "Enter a valid email"
                    : ""
                }
                sx={{ borderRadius: "8px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Preset Amount Buttons */}
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                {[10, 25, 50, 100].map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset ? "contained" : "outlined"}
                    sx={{
                      borderRadius: "20px",
                      px: 2,
                      fontSize: "14px",
                      fontWeight: "bold",
                      minWidth: "80px",
                      transition: "0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                    onClick={() => setAmount(preset)}
                  >
                    <AttachMoney fontSize="small" /> {preset}
                  </Button>
                ))}
                <TextField
                  label="Custom Amount"
                  type="number"
                  variant="outlined"
                  inputProps={{ min: 1 }}
                  sx={{ width: "100px" }}
                  error={!isFormValid && amount <= 0}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </Box>

              {/* Custom Amount Input */}

              <PayPalScriptProvider
                options={{
                  clientId: CLIENT_ID_PAYPAL,
                  currency: "USD",
                  intent: "capture",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    height: 50, // Adjust button height
                    shape: "rect",
                    label: "pay",
                  }}
                  fundingSource={undefined}
                  createOrder={async () => {
                    if (!isFormValid) {
                      setToast({
                        open: true,
                        message:
                          "Please enter a valid name, email, and amount.",
                        severity: "error",
                      });
                      return null;
                    }
                    try {
                      const response = await fetch(BASE_URL + "/create-order", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          amount: amount.toString(),
                          name,
                          email,
                          painting_id: paintingId,
                        }),
                      });

                      const orderData = await response.json();

                      if (orderData.id) {
                        return orderData.id;
                      }
                      throw new Error(
                        orderData.message ||
                          orderData.error ||
                          "Failed to create order"
                      );
                    } catch (error: any) {
                      setToast({
                        open: true,
                        message:
                          error.message ||
                          error.error ||
                          "Error creating order",
                        severity: "error",
                      });
                      return null;
                    }
                  }}
                  onApprove={async (data, actions) => {
                    try {
                      if (!actions || !actions.order) {
                        throw new Error("PayPal order actions are undefined.");
                      }

                      const capture = await actions.order.capture();

                      const response = await fetch(
                        `${BASE_URL}/capture-payment/${data.orderID}`,
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ capture }),
                        }
                      );

                      const orderData = await response.json();
                      const errorDetail = orderData?.details?.[0];

                      if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                        return actions.restart(); // Retry payment
                      } else if (errorDetail) {
                        throw new Error(
                          `${errorDetail.description} (Debug ID: ${orderData.debug_id})`
                        );
                      } else if (!orderData?.purchase_units) {
                        throw new Error(
                          `Unexpected response: ${JSON.stringify(orderData)}`
                        );
                      }

                      setToast({
                        open: true,
                        message:
                          "Payment Successful! Thank you for your support!",
                        severity: "success",
                      });

                      setShowThankYou(true);

                      setTimeout(() => {
                        handleClose();
                        setShowThankYou(false);
                      }, 3000);
                    } catch (error: any) {
                      setToast({
                        open: true,
                        message: error.message || "Payment Failed",
                        severity: "error",
                      });
                    }
                  }}
                  disabled={!isFormValid}
                />
              </PayPalScriptProvider>
            </Box>
          )}
        </Box>

        {/* Toast Notifications */}
        <Snackbar
          open={toast.open}
          autoHideDuration={3000}
          onClose={() => setToast({ ...toast, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "right" }} // Moves Snackbar to the top
        >
          <Alert
            onClose={() => setToast({ ...toast, open: false })}
            severity={toast.severity}
            sx={{
              width: "100%",
              fontSize: "1.2rem", // Increases text size
              fontWeight: "bold", // Makes text bold
              p: 2, // Adds padding for better appearance
            }}
            iconMapping={{
              success: <CheckCircle fontSize="large" />, // Larger success icon
              error: <ErrorOutline fontSize="large" />, // Larger error icon
            }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </>
    </Modal>
  );
};

export default PayPalDonate;
