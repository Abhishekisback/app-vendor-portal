"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";

interface PDFprops {
  pdfUrl: string;
  id: string;
  customStyles?: {
    [key: string]: any;
  };
  iframeStyles?: {
    [key: string]: any;
  };
}

const PDFViewer: React.FC<PDFprops> = ({
  pdfUrl,
  customStyles,
  id,
  iframeStyles,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top: customStyles?.top ? customStyles.top : "50px",
    left: customStyles?.left ? customStyles.left : "50%",
    transform: customStyles?.transform
      ? customStyles.transform
      : "translate(-50%, 0)",
    width: customStyles?.width ? customStyles.width : "100vw",
    height: customStyles?.height ? customStyles.height : "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 1,
    ...customStyles,
  };

  return (
    <div>
      <Box sx={{ ...style, backgroundColor: "transparent" }}>
        <iframe
          id={id}
          title={`${id}-PDF-Viewer`}
          src={pdfUrl}
          style={{
            width: iframeStyles?.width ? style.width : "100%",
            height: iframeStyles?.height ? style.height : "100%",
            ...iframeStyles
          }}
        />
      </Box>
    </div>
  );
};

export default PDFViewer;
