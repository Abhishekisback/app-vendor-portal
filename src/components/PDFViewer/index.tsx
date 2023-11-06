"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface PDFprops {
  pdfUrl: string;
  id: string;
  customStyles?: {
    [key: string]: any;
  };
}

const PDFViewer: React.FC<PDFprops> = ({ pdfUrl, customStyles, id }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const style: React.CSSProperties = {
    position: "absolute",
    top: "50px",
    left: "50%",
    transform: "translate(-50%, 0)",
    width: customStyles?.width ? customStyles.width : "100vw",
    height: customStyles?.height ? customStyles.height : "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 1,
  };

  return (
    <div>
      <button onClick={openModal}>Open PDF</button>
      {showModal && (
        <>
          <Box sx={{ ...style, backgroundColor: "transparent" }}>
            <iframe
              id={id}
              title={`${id}-PDF-Viewer`}
              src={pdfUrl}
              width="100%"
              height="150%"
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default PDFViewer;

// import React, { useState } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

// interface PDFprops {
//   pdfUrl: string;
//   id: string;
//   customStyles?: {
//     [key: string]: any;
//   };
// }

// const PDFViewer: React.FC<PDFprops> = ({ pdfUrl, customStyles, id }) => {
//   const [showModal, setShowModal] = useState<boolean>(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const style: React.CSSProperties = {
//     position: "absolute",
//     top: "50px",
//     left: "50%",
//     transform: "translate(-50%, 0)",
//     width: customStyles?.width ? customStyles.width : "100vw",
//     height: customStyles?.height ? customStyles.height : "100vh",
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     zIndex: 1,
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open PDF</button>
//       <Modal
//         open={showModal}
//         onClose={closeModal}
//         aria-labelledby={`${id}-PDF-Viewer`}
//       >
//         <Box sx={style}>
//           <IconButton
//             sx={{
//               position: "absolute",
//               top: "10px",
//               right: "150px",
//               backgroundColor: "#fff",
//             }}
//             onClick={closeModal}
//             size="small"
//           >
//             <CloseIcon />
//           </IconButton>
//           <iframe
//             id={id}
//             title={`${id}-PDF-Viewer`}
//             src={pdfUrl}
//             width="100%"
//             height="100%"
//           />
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default PDFViewer;
