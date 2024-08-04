import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <>
      {" "}
      <Box sx={{ bgcolor: "#4b4b4b", color: "white", mt:10 }}>
        <Grid container sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', px:5}}>
          <Grid item xs={12} lg={4}>
            <Box sx={{ pt: 5 }}>
               <Typography sx={{color:'lightgreen', fontSize:25}}>SOCIAL MEDIA</Typography>
              <Typography sx={{pt:3}}>
                Follow us on social media:
              </Typography>
              <IconButton sx={{color:'white', gap:'1.5rem', '@media (max-width: 600px)':{gap:'1rem'}}}>
                <FacebookIcon />
                <XIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <CenterFocusStrongIcon />
                <WhatsAppIcon />
              </IconButton>
               <Divider color={'white'} sx={{width:'300px', '@media (max-width: 600px)':{width:250}}} />

               <Typography sx={{pt:2}}>United Kingdom </Typography>
               <Typography>University of East London </Typography>
         
              
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
              <Box >
                <Typography sx={{fontSize:25, pt:5, color:'lightgreen'}}>EXPLORE UEL </Typography>
                </Box>

            
                 <ul className="ulline">
                     <li> About </li>
                     <li> Take a virtultour </li>
                     <li> Calendars </li>
                     <li> Find Us </li>
                     <li> Contact Us </li>
                  </ul>
             

          </Grid>
          <Grid item xs={12} lg={4}>

              <Box>
              <Typography sx={{color:'lightgreen', fontSize:25, pt:5 }} >
                 EXPLORE UEL
                 </Typography>
           
                   <ul className="ulline">
                     <li> Undergraduate </li>
                     <li> Postgradute </li>
                     <li> News </li>
                     <li>Events</li>
                     <li>Jobs</li> 
                   </ul>

                   
              </Box>
                 
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
