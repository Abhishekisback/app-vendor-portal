"use client";
import "../theme/theme.scss";
import { TextField } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
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
import PDFViewer from "@/components/PDFViewer";
import CustomModal from "@/components/CustomModal";
import Chart from "@/components/ChartComponent";

import CustomSearchField2 from "@/components/Customsearch2";
import RFQData from "../components/samples.json";
//import MultiSelectDropdown from "@/components/MultiSelectDropDown";
import IframeWrapper from "@/components/PDFViewer";
import CustomTextAreaStyled from "@/components/StyledComment/page2";

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

  const customUploadDownloadStyles: React.CSSProperties = {
    fontFamily: poppins.style.fontFamily,
    boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.15)",
    fontSize: "12px",
    backgroundColor: "#13A4CC",
    display: "inline-flex",
    padding: "10px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
    fontWeight: "500",
    outline: "none",
    border: "none",
    fontStyle: "normal",
    textTransform: "none",
  };

  const [showModal, setModal] = useState(false);

  const customTextFieldStyles: React.CSSProperties = {
    width: "180px",
    height: "30px",
    borderRadius: "4px",
    color: "#808080",
    border: "2px solid #ADADAD",
    backgroundColor: "#FFF",
    padding: "6px 9px 9px 15px",
    fontSize: "18px",
    fontFamily: poppins.style.fontFamily,
  };

  const customButtonStyles: React.CSSProperties = {
    border: "1px solid #ADADAD",
    width: "160px",
    height: "30px",
    color: "#13A4CC",
    fontFamily: poppins.style.fontFamily,
  };

  const customButtonStyles2: React.CSSProperties = {
    border: "2px solid #13A4CC",
    width: "100px",
    height: "40px",
    color: "#FFF",
    backgroundColor: "#13A4CC",
    fontFamily: poppins.style.fontFamily,
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
    fontFamily: poppins.style.fontFamily,
  };

  const customIconStyles: React.CSSProperties = {
    width: "30px",
    height: "30px",
  };

  const [showmodal, setshowmodal] = useState(false);
  const [text, settext] = useState("");
  const [input, setInput] = useState("");
  const [rfqd, setrfqd] = useState(RFQData);

  // console.log(text);
  // console.log("search", input);
  console.log(RFQData);
  useEffect(() => {
    console.log("CHANGE");

    if (input.length >= 3) {
      const filteredRFQ = rfqd.filter((filter) => {
        return filter.RFQNO.includes(input.toString());
      });
      console.log(filteredRFQ);

      setrfqd(filteredRFQ);
    } else {
      setrfqd(RFQData);
    }
  }, [input]);
  type OptionType = {
    value: number;
    label: string;
  };

  const options: OptionType[] = [];
  for (let i = 0; i < 50; ++i) {
    options.push({
      value: i + 1,
      label: `Ennore ${i + 1}`,
    });
  }
  const definedWidth = "170px";
  const textLabel = "PR Type";

  const [dropDownSelectedItems, setDropDownSelectedItems] = useState<string[]>(
    []
  );

  const searchable = true;

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "start",
        padding: "10px",
        backgroundColor: "",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      

      <CustomSearchField2
      closeIcon={CloseIcon}
        icon={searchIcon}
        OnChange={(e) => {
          setInput(e);
          console.log("cs", e);
        }}
        id="search"
        placeHolder="Search RFQ#"
        isAvailable={true}
        customStyles={{
          height: "30px",
          width: "160px",
          color: "green",
          borderRadius: "6px",
          fontFamily: poppins.style.fontFamily,
          border:"1px solid #ADADAD"
        }}
        iconStyles={{ width: "25px", height: "25px" }}
      />

      <CustomTextField
        OnChange={(value) => {
          console.log("arun", value);
        }}
        id="txt"
        name="comments"
        placeHolder="QT-1234"
        type="text"
        isAvailable={true}
        customStyles={{
          width: "160px",
          height: "30px",
          color: "red",
          fontFamily: poppins.style.fontFamily,
        }}
      />
      <div style={{width:"200px"}}>
      <CustomTextAreaStyled
        OnChange={() => {}}
        id="sty"
        lineCount={2}
        maxLimit={333}
        placeHolder="Comments"
        customStyles={{
          width:"100%",
          fontSize:"12px",
          fontWeight:"600",
          fontFamily: poppins.style.fontFamily,
        }}
        isAvailable={true}
        showTextCount={false}
      />
      </div>

      <CustomButton
        btnText="Submit"
        id="Decline"
        isAvailable={true}
        OnClick={() => {}}
        variant="outlined"
        startIcon={submitIcon}
        endIcon={""}
        customStyles={{
          border: "2px solid #13A4CC",
          color: "#FFF",
          backgroundColor: "#13A4CC",
          width: "120px",
          fontFamily: poppins.style.fontFamily,
          fontSize: "19px",
        }}
        iconStyles={{
          width: "25px",
          height: "25px",
        }}
        hoverStyles={{
          border: "1px solid var(#00000080, rgba(0, 0, 0, 0.50))",

          backgroundColor: "#0D7491",
        }}
      />
      <CustomButton
        btnText="Cancel"
        id="cancel-btn"
        isAvailable={false}
        OnClick={() => {}}
        variant="outlined"
        customStyles={{
          border: "2px solid #808080",
          color: "#808080",
          width: "130px",
          fontFamily: poppins.style.fontFamily,
        }}
      />
      <CustomButton
        btnText="Decline"
        id="Decline"
        isAvailable={true}
        OnClick={() => {}}
        variant="outlined"
        startIcon={declineIcon}
        customStyles={{
          border: "2px solid #13A4CC",
          color: "#13A4CC",
          // backgroundColor: "#E0E0E0",
          width: "130px",
          fontFamily: poppins.style.fontFamily,
        }}
      />
      <CustomButton
        btnText="Submit"
        id="Decline"
        isAvailable={true}
        OnClick={() => {}}
        variant="outlined"
        startIcon={submitIcon}
        customStyles={{
          border: "2px solid #13A4CC",
          color: "#13A4CC",
          backgroundColor: "#E0E0E0",
          width: "130px",
          fontFamily: poppins.style.fontFamily,
        }}
        hoverStyles={{
          border: "2px solid red",
        }}
      />
      <CustomIcon
        OnClick={() => {}}
        icon={chatIcon}
        id="close-icon"
        isAvailable={true}
      />

      <button
        onClick={() => {
          setshowmodal(true);
        }}
        style={{ width: "200px" }}
      >
        open pdf
      </button>
       {showmodal && (
        <IframeWrapper
        customStyles={{
          width: "100%",
          minHeight:"100vh",
          top: "50px",
        }}
        id="purchase orders"
        url="https://www.africau.edu/images/default/sample.pdf"
        iframeStyles={{
          width: "100vw",
          minHeight: "100vh",
        }}
      />
      )} 
     
      <button
        style={{ width: "200px" }}
        onClick={() => {
          setModal(true);
        }}
      >
        open modal
      </button>

      <CustomModal
        isBackgroundGray={true}
        onclose={() => {
          setModal(false);
        }}
        id="modal-decline"
        open={showModal}
        customStyles={{
          width: "460px",
          height: "460px",
          backgroundColor: "#eb8484",
          padding: "20px",
        }}
      >
        <CustomIcon
          icon={CloseIcon}
          OnClick={() => {
            setModal(false);
          }}
          isAvailable={true}
          id="mod"
          customStyles={{}}
          iconStyles={{}}
        />
        <br />
        <CustomTextArea
          showTextCount={true}
          lineCount={2}
          isAvailable={true}
          OnChange={(value) => {
            console.log(value);
            settext(value);
          }}
          id="comments"
          placeHolder="Comments"
          maxLimit={250}
          customStyles={{
            borderRadius: "6px",
          }}
        />
        <br />

        <p>Please add your comments here</p>

        <div style={{ display: "flex", gap: "20px" }}>
          <CustomButton
            OnClick={() => {}}
            btnText="Decline"
            id="dec"
            isAvailable={true}
            variant="outlined"
            customStyles={{}}
            startIcon={excelIcon}
            endIcon=""
            focusStyles={{}}
            hoverStyles={{}}
            iconStyles={{}}
          />
          <CustomButton
            OnClick={() => {}}
            btnText="Accept"
            id="dec"
            isAvailable={true}
            variant="outlined"
            customStyles={{}}
            startIcon={excelIcon}
            endIcon=""
            focusStyles={{}}
            hoverStyles={{}}
            iconStyles={{}}
          />
        </div>
      </CustomModal>

      <Checkboxes
        name=""
        borderColor="#808080"
        OnChange={(value) => {
          console.log(value);
        }}
        labelStyles={{ color: "#808080", fontFamily: poppins.style.fontFamily }}
        size="25px"
        fillColor="blue"
        isAvailable={true}
        label="Agree to terms and conditions"
      />

      <CustomRadioButtons
        id="radio-grp"
        size="25px"
        borderColor=""
        fillColor=""
        isAvailable={true}
        name="Select one"
        OnChange={(value) => {}}
        optionList={radioList}
        radioBtnGrpName="Select cvgevdgedgevdgvgender "
        labelStyles={{
          fontSize: "18px",
          fontFamily: poppins.style.fontFamily,
          margin: "0px",
        }}
      />
      {/* <table>
        <tbody>
          {rfqd.map((item: any, i: number) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.clientname}</td>
                <td>{item.RFQNO}</td>
                <td>{item.Vesselname}</td>
                <td>{item.description}</td>
                <td>{item.itemdate}</td>
                <td>{item.supplyport}</td>
                <td>{item.supplydate}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ backgroundColor: "#a8ababaf", padding: "10px" }}>
        <CustomSearchField2
          customStyles={{
            padding: "10px 0px 10px 2px",
            backgroundColor: "#FFF",
            color: "#808080",
            fontSize: "16px",
            border: "none",
            width: "200px",
            fontFamily: poppins.style.fontFamily,
          }}
          icon={searchIcon}
          OnChange={(value) => {
            console.log("value search 2", value);
          }}
          id="search"
          placeHolder="Search RFQ#"
          isAvailable={true}
          iconStyles={{ width: "30px", height: "30px" }}
        />
      </div>

      
      <CustomButton
        btnText="Cancel"
        id="cancel-btn"
        isAvailable={true}
        OnClick={() => {}}
        variant="outlined"
        customStyles={{
          border: "3px solid #808080",
          color: "#333333",
          width: "130px",
          backgroundColor: "",
          fontFamily: poppins.style.fontFamily,
        }}
      />

      <CustomButton
        id="btn1"
        btnText="save as draft"
        OnClick={() => {
          setTimeout(() => {
            alert("after time out");
          }, 2000);
        }}
        startIcon={editIcon}
        isAvailable={false}
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
        customStyles={{}}
        placeHolder="Search here"
        isAvailable={true}
      />

      <CustomTextField
        name="password"
        type="password"
        OnChange={() => {}}
        customStyles={{}}
        placeHolder="QT-1234"
        isAvailable={true}
        id="textfield1"
      />

      <CustomIcon
        id="icon2"
        icon={designLayoutIcon}
        isAvailable={true}
        OnClick={() => {}}
        customStyles={customIconStyles}
      />

      <CustomIcon
        id="icon1"
        isAvailable={true}
        icon={chatIcon}
        OnClick={() => {}}
        customStyles={customIconStyles}
      />

      <CustomRadioButtons
        id="radio-grp"
        size="30px"
        borderColor="#61ad10"
        fillColor="#dde6ac"
        isAvailable={true}
        name="Select one"
        OnChange={(value) => {
          alert(value);
        }}
        optionList={radioList}
        radioBtnGrpName="Select "
        labelStyles={{
          fontFamily: poppins.style.fontFamily,
          fontSize: "18px",
          color: "red",
        }}
      />

      <CustomTextArea
        showTextCount={true}
        lineCount={4}
        isAvailable={true}
        customStyles={{
          fontFamily: poppins.style.fontFamily,
        }}
        OnChange={(value) => {
          console.log(value);
          settext(value);
        }}
        id="comments"
        placeHolder="comments"
        maxLimit={250}
      />

      <Checkboxes
        name=""
        borderColor="#808080"
        OnChange={(value) => {
          console.log(value);
        }}
        labelStyles={{ fontFamily: poppins.style.fontFamily }}
        size="25px"
        fillColor="blue"
        isAvailable={true}
        label="Agree to terms and conditions"
      /> */}
    </div>
  );
}
