"use client";

import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import login from "./login.module.scss";
import logoImg from "../../assets/Reusable-components/transportationShipLogoWhite.svg";
import { COMPANY_EMAIL, SAMPLE_EMAIL } from "../../constants";
import Image from "next/image";

const customStyles = {
  width: "400px",
  marginTop: "20px",
  marginBottom: "25px",
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Box className={login.wrapper}>
        <Box className={login.section1}>
          <Image src={logoImg.src} width={50} height={40} alt="logo-img" />
          <p>Logo Name</p>
        </Box>
        <div className={login.section2}>
          <Box className={login.logIn}>Log In</Box>
          <Box className={login.loginForm}>
            <label>Email Address</label>
            <TextField
              InputProps={{ style: customStyles }}
              placeholder={SAMPLE_EMAIL}
            />
            <label>Password</label>
            <FormControl style={customStyles}>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder=" * * * * * * *"
              />
            </FormControl>

            <button className={login.loginBtn}>Log In</button>
            <p className={login.footer}>
              For any issues, please contact
              <a href="#" className={login.footerLink}>
                {COMPANY_EMAIL}
              </a>
            </p>
            <p id="version">version 1.4</p>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default Login;
