import React from "react";
import { Box, Typography } from "@mui/material";

const PageTitle = ({
  title,
  subtitle,
  alignment = "center",
  sx,
}: PageTitleProps) => {
  return (
    <Box
      sx={{
        textAlign: alignment,
        margin: "20px 0",
        padding: "20px",
        ...sx?.container,
      }}
    >
      <Typography
        variant="h3" // Adjusted variant for better responsiveness
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#1a73e8",
          margin: 0,
          fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
          ...sx?.title,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1" // Changed variant for better scaling
          sx={{
            color: "text.secondary",
            marginTop: "5px",
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
            ...sx?.subtitle,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

interface PageTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  sx?: {
    container?: React.CSSProperties;
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  };
}

export default PageTitle;
