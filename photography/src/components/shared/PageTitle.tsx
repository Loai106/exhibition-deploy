import React from "react";
import { Box, Typography } from "@mui/material";

const PageTitle = ({ title, subtitle, alignment, sx }: PageTitleProps) => {
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
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#1a73e8",
          margin: 0,
          ...sx?.title,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            marginTop: "5px",
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
