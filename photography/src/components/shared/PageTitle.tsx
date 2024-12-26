import React from "react";
import { Box, Typography } from "@mui/material";

const PageTitle = ({ title, sx, background }: PageTitleProps) => {
  return (
    <Box
      sx={{
        my: "40px",
        position: "relative",
        ...sx?.container,
        pb: "16px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "black",
          backgroundColor: background ?? "white",
          padding: "0 16px",
          display: "inline-block",
          position: "relative",
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
          ...sx?.title,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

interface PageTitleProps {
  title: string;
  alignment?: "left" | "center" | "right";
  sx?: {
    container?: React.CSSProperties;
    title?: React.CSSProperties;
  };
  background?: string;
}

export default PageTitle;
