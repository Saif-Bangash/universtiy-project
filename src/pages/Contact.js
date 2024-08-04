import React from 'react'
import Layout from '../Component/Layout/Layout'

import  { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

function Contact() {
  
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleNameChange = e => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    if (e.target.validity.valid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
       console.log(name, password, email)
  };
  return (
    <Layout>

      <Box sx={{textAlign:'center', mt:20, }}>

    <Box component="form" onSubmit={handleSubmit} noValidate   >
      <TextField
        required
        label="Name"
        value={name}
         
        onChange={handleNameChange}
        error={nameError}
        inputProps={{
          pattern: "[A-Za-z ]+",
        }}

        helperText={
          nameError ? "Please enter your name (letters and spaces only)" : ""
        }
          sx={{width:500 , '@media (max-width: 600px)':{width:300}}}
      />
           

         <Box sx={{mt:5}}>

         <TextField
        required
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        helperText={passwordError ? "Please enter a valid email" : ""}

        inputProps={{
          type: "password",
        }}
        sx={{width:500, '@media (max-width: 600px)':{width:300} }}

      />
         </Box>

       <Box sx={{mt:5}}>

      <TextField
        required
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailError ? "Please enter a valid email" : ""}

        inputProps={{
          type: "email",
        }}
        sx={{width:500, '@media (max-width: 600px)':{width:300} }}

      />
      </Box>

     

      <Box sx={{mt:5, mx:20, '@media (max-width: 600px)':{mx:10}}}>
      <Button variant="contained" color="primary" type="submit" style={{width:150}}>
        Submit
      </Button>
      </Box>
    </Box>
    </Box>

    </Layout>
  )
}

export default Contact
