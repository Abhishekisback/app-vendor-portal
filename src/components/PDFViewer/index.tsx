import React from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";

interface IframeProps {
  url: string;
  id: string;
  customStyles?: {
    [key: string]: string;
  };
  iframeStyles?: {
    [key: string]: string;
  };
}

const IframeWrapper: React.FC<IframeProps> = ({
  url,
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
  const isBackgroundGray = false;
  return (
    <div style={{width:"100%", height:"100%"}}>
      <Box sx={{ ...style, backgroundColor: "transparent" }}>
        <iframe
          id={id}
          title={`${id}-Iframe-Wrapper`}
          src={url}
          style={{
            // width: iframeStyles?.width ? style.width : "100%",
            // height: iframeStyles?.height ? style.height : "100%",
            ...iframeStyles,
          }}
        />
      </Box>
    </div>
  );
};

export default IframeWrapper;
