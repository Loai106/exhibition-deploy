import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const PageTitle = ({
  title,
  alignment = "center",
  sx,
  background,
}: PageTitleProps) => {
  return (
    <Box
      sx={{
        textAlign: alignment,
        my: "40px",
        position: "relative",
        ...sx?.container,
      }}
    >
      <Divider
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          transform: "translateY(-50%)",
          height: "2px",
          zIndex: 1,
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        color="textSecondary"
        sx={{
          fontWeight: "bold",
          color: "black",
          backgroundColor: background ?? "white",
          padding: "0 16px",
          display: "inline-block",
          zIndex: 2,
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
