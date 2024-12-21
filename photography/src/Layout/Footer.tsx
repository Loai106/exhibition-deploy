import { Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#005288",
        color: "white",
        padding: "2rem 1rem",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={4}>
        {/* Section 1: About */}
        <Grid size={{xs: 12, sm: 4}}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are committed to providing the best service and resources to our
            customers. Contact us for more information.
          </Typography>
        </Grid>

        {/* Section 2: Links */}
        <Grid size={{xs: 12, sm: 4}}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Section 3: Contact */}
        <Grid size={{xs: 12, sm: 4}}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: support@example.com
            <br />
            Phone: +1 123-456-7890
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "1rem",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
