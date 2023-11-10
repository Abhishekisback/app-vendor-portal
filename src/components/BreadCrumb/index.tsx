import * as React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import "./style.css";

interface BreadCrumbProps {
  headerNames: string[];
  selectedHeader: string;
  changeSelectedSubHeader: any;
  enabledIcon: string;
  disabledIcon: string;
  width: number;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  headerNames,
  selectedHeader,
  changeSelectedSubHeader,
  enabledIcon,
  disabledIcon,
  width,
}) => {
  return (
    <Grid display={"flex"} justifyContent={"space-between"} width={`${width}%`}>
      {headerNames.map((headers, index) => (
        <Grid key={index} display={"flex"} justifyContent={"space-between"}>
          <Image
            src={selectedHeader == headers ? enabledIcon : disabledIcon}
            alt={`headers-${index}`}
            height={20}
            width={20}
          />

          <label
            onClick={() => changeSelectedSubHeader(headers)}
            className={
              selectedHeader == headers
                ? "breadCrumbStyle-selectedText"
                : "breadCrumbStyle-disabledText"
            }
          >
            {headers}
          </label>
        </Grid>
      ))}
    </Grid>
  );
};

export default BreadCrumb;
