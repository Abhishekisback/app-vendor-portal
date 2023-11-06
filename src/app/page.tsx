"use client";
import "../theme/theme.scss";
import React, { Suspense, useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
import SearchableSelectTag from "@/components/CustomSearchableSelectTag";
import Checkboxes from "@/components/CustomCheckBox";
import CustomRadioButtons from "@/components/CustomRadioButton";
import CustomTextArea from "@/components/CustomTextArea";
import Login from "./Login/page";
import excelIcon from "../assets/Reusable-components/excelIcon.svg";
import downloadIconWhite from "../assets/Reusable-components/downloadIconWhite.svg";
import chatIcon from "../assets/Reusable-components/chatIcon.svg";
import editIcon from "../assets/Reusable-components/Edit-pencil-Icon.svg";
import declineIcon from "../assets/Reusable-components/decline.svg";
import submitIcon from "../assets/Reusable-components/submitIcon.svg";
import designLayoutIcon from "../assets/Reusable-components/designLayoutGridIcon.svg";
import CloseIcon from "../assets/Reusable-components/closeIcon.svg";
import searchIcon from "../assets/Reusable-components/searchIcon.svg";
import CustomIcon from "@/components/CustomIcon";
import Image from "next/image";
import { poppins } from "./fonts";

import CustomTextarea from "@/components/CustomTextArea";
import PDFViewer from "@/components/PDFViewer";
import CustomModal from "@/components/CustomModal";

interface searchAbleTags {
  label: string;
  value: any;
}

export default function Home() {
  const [selectedValues, setSelectedValues] = useState<searchAbleTags[]>([]);
  const handlechange = (value: string) => {
    console.log(value);
  };
  const handleUploadDownload = () => {
    alert("upload");
  };
  const handleSearchChange = (value: searchAbleTags[]) => {
    setSelectedValues(value);
  };
  const handleOnChange = (value: any) => {
    console.log(value);
  };
  const handleChatBtn = () => {};
  const handleradiobtn = (value: any) => {
    console.log("radio btn  value", value);
  };

  const handleTextAreaChange = (value: any) => {};
  const samples = [
    { label: "Titanic", value: "Titanic" },
    { label: "Enterprise", value: "Enterprise" },
    { label: "Mayflower", value: "Mayflower" },
    { label: "Queen Mary", value: "Queen Mary" },
    { label: "Black Pearl", value: "Black Pearl" },
  ];

  const radioList = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" },
  ];


 
  
  const [showModal, setModal] = useState(false);
  const customTextFieldStyles: React.CSSProperties = {
    width: "180px",
    height: "30px",
    borderRadius: "4px",
    color: "#808080",
    border: "2px solid #CDCDCD",
    backgroundColor: "#FFF",
    padding: "6px 32px 9px 6px",
    fontFamily: poppins.style.fontFamily,
  };

  const customButtonStyles: React.CSSProperties = {
    border: "2px solid #13A4CC",
    width: "160px",
    height: "30px",
    color: "#13A4CC",
  };

  const customButtonStyles2: React.CSSProperties = {
    border: "2px solid #13A4CC",
    // width: "200px",
    height: "30px",
    color: "#FFF",
    backgroundColor: "#13A4CC",
  };

  
  const customButtonStyles4: React.CSSProperties = {
    border: "2px solid #13A4CC",
    width: "160px",
    height: "30px",
    color: "#FFF",
    backgroundColor: "#13A4CC",
    borderRadius: "5px",
    padding: "15px",
    backgroundImage: declineIcon,
  };

  const customIconStyles: React.CSSProperties = {
    width: "30px",
    height: "30px",
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Suspense fallback={<p>Loading Login...</p>}>{/* <Login /> */}</Suspense>

      <PDFViewer
        id="purchase orders"
        pdfUrl="https://www.africau.edu/images/default/sample.pdf"
      />

      <button
        onClick={() => {
          setModal(true);
        }}
      >
        open modal
      </button>

      <CustomModal
        onclose={() => {
          setModal(false);
        }}
        id="modal-decline"
        open={showModal}
        customStyles={{
          width: "460px",
          height: "460px",
          backgroundColor: "#FFF",
          padding: "20px",
        }}
      >
        <CustomIcon
          OnClick={() => {
            setModal(false);
          }}
          icon={CloseIcon}
          id="close-icon"
          isAvailable={true}
          customStyles={{ backgroundColor: "#FFF", marginLeft: "90%" }}
        />

        <p style={{ fontSize: "14px", marginLeft: "25%" }}>
          Please Add Comments for PO line
        </p>
        <div style={{ marginTop: "15%" }}>
          <p style={{ fontSize: "12px", marginLeft: "16%" }}>
            Comments <span style={{ fontSize: "12px" }}>(max 250 chars)</span>{" "}
          </p>

          <CustomTextArea
            OnChange={() => {}}
            id="comments"
            maxLimit={250}
            placeHolder="Comments"
            customStyles={{
              border: "2px solid #948e8e",
              width: "300px",
              marginLeft: "75px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <CustomButton
              btnText="Cancel"
              id="cancel-btn"
              isAvailable={true}
              OnClick={() => {}}
              variant="outlined"
              customStyles={{
                border: "2px solid #808080",
                color: "#808080",
                width: "130px",
              }}
            />
            <CustomButton
              btnText="Decline"
              id="Decline"
              isAvailable={true}
              OnClick={() => {}}
              variant="outlined"
              customStyles={{
                border: "1px solid #D74949",
                color: "#FFF",
                backgroundColor: "#D74949",
                width: "130px",
              }}
            />
          </div>
        </div>
      </CustomModal>

      <CustomButton
        id="btn1"
        btnText="save as draft"
        OnClick={() => {
          setTimeout(() => {
            alert("after time out");
          }, 2000);
        }}
        startIcon={editIcon}
        isAvailable={true}
        customStyles={customButtonStyles}
        variant="outlined"
      />
      <CustomButton
        id="btn2"
        btnText="Accept"
        OnClick={() => {}}
        startIcon={submitIcon}
        isAvailable={true}
        customStyles={customButtonStyles2}
        variant="outlined"
      />
      <CustomButton
        id="btn3"
        btnText="Decline"
        OnClick={() => {}}
        startIcon={declineIcon}
        isAvailable={true}
        // customStyles={customButtonStyles3}
        variant="outlined"
      />

      <CustomButton
        id="btn3"
        btnText="Download"
        OnClick={() => {}}
        startIcon={downloadIconWhite}
        endIcon={excelIcon}
        isAvailable={true}
        customStyles={customButtonStyles4}
        variant="outlined"
      />

      <CustomTextField
        id="search"
        name="search"
        type="text"
        OnChange={handlechange}
        customStyles={customTextFieldStyles}
        icon={searchIcon}
        placeHolder="Search here"
        isAvailable={true}
      />

      <CustomTextField
        name="password"
        type="password"
        OnChange={() => {}}
        customStyles={customTextFieldStyles}
        placeHolder="QT-1234"
        isAvailable={true}
        id="textfield1"
      />

      <CustomIcon
        id="icon2"
        icon={designLayoutIcon}
        isAvailable={true}
        OnClick={() => {}}
      />

      <CustomIcon
        id="icon1"
        isAvailable={true}
        icon={chatIcon}
        OnClick={() => {}}
        customStyles={customIconStyles}
      />

      <CustomRadioButtons
        isAvailable={true}
        name="Select one"
        OnChange={() => {}}
        optionList={radioList}
        radioBtnGrpName="Select "
      />

      <CustomTextArea id="comments" maxLimit={240} placeHolder="Comments" />
      <Checkboxes isAvailable={true} label="Agree to terms and conditions" />
    </div>
  );
}
