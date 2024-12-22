import React from "react";
import Lottie from "lottie-react";
import { Dialog } from "@mui/material";
import loadingAnimation from "../animation/loader.json";

interface LoaderDialogProps {
  loading: boolean;
}

const LoaderDialog: React.FC<LoaderDialogProps> = ({ loading }) => {
  return (
    <Dialog
      open={loading}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "hidden",
          zIndex: 9999,
        },
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: "200px", height: "200px" }}
      />
    </Dialog>
  );
};

export default LoaderDialog;
