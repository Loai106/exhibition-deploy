import { Box, Typography, Link, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      sx={{
        py: "3rem",
        backgroundColor: "#333",
        color: "white",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section 1: About */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              Welcome to our photography world! Here, we believe that every
              picture tells a story. Our mission is to capture the beauty of
              life and the essence of emotions through our lens.
            </Typography>
          </Grid>

          {/* Section 2: Links */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Section 3: Contact */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            {/* <Typography variant="body2">
              Email: support@example.com
              <br />
              Phone: +1 123-456-7890
            </Typography> */}
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
      </Container>
    </Box>
  );
};

export default Footer;
