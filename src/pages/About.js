import React from "react";
import Layout from "../Component/Layout/Layout";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import University from "../image/university.jpg";
import EastIcon from "@mui/icons-material/East";
import { CardList, CardList6 } from "../Data/Card";

function About() {
  return (
    <Layout>

   <Box sx={{bgcolor:'#03002e', height:450, '@media (max-width: 600px)':{height:250}}}>
      <Typography sx={{color:'white', textAlign:'center', pt:25, fontSize:50, fontFamily:'inherit', fontWeight:'bold', '@media (max-width: 600px)':{pt:10, fontSize:25}}}>About us</Typography>
   </Box>
    
      <Box sx={{mt:5,}}>
         <Typography sx={{pt:5, bgcolor:'', mx:'auto', width:'65%',textAlign:'center', fontSize:25, fontFamily:'inherit', fontWeight:'bold', '@media (max-width: 600px)':{width:'80%', fontSize:15, m:5, textAlign:'justify', pt:0}}}>The University of London is the UK’s leading provider of digital and blended distance education internationally, offering programmes to around 40,000 students in 190 countries across the world. Although proudly rooted in London, our community and impact are global. </Typography>
      </Box>
       
        <Box sx={{mt:10}}>
           <Grid container>
             <Grid item xs={12} lg={6} sx={{bgcolor:'#03002e', height:580, '@media (max-width: 600px)':{height:350}}} >
                <Box sx={{ color:'white', textAlign:'center', }}>
                    <Typography sx={{fontSize:35, fontWeight:'bold',fontFamily:'inherit',mt:20, '@media (max-width: 600px)':{mt:5, } }}>We are a federation</Typography>
                    <Typography sx={{fontFamily:'cursive', mx:10, pt:2, '@media (max-width: 600px)':{textAlign:'left', mx:5}}} >We are a federation of 17 esteemed higher education institutions, with collaboration at the heart of our ethos.</Typography>
                     <button className="aboutbtn">Read more about our federation</button>
                </Box>
             </Grid>

              <Grid item xs={12}  lg={6} >
                 <img src="https://www.london.ac.uk/sites/default/files/styles/1_1_media_medium/public/Strategy/iStock-491926370.png?itok=8mw7Qubv" 
                 
                  className="aboutImg"
                 
                 />
              </Grid>

               
           </Grid>
           
          <Box sx={{mt:10, mx:5}}>
             <Typography sx={{fontSize:30, fontFamily:'inherit', fontWeight:'bold'}}>Our last news</Typography>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:2, mt:5}}>
                 {
                   CardList6.map((item) => {
                     return(
                      <Card sx={{width:400,  boxShadow:'none'}} className="Cardimg">
                      <CardMedia component='img' src={item.Img} sx={{height:220, }} />
   
                       <CardContent>
                         <Typography sx={{ fontWeight:'bold'}}> {item.title} </Typography>
                         <Typography sx={{fontFamily:'vardana', }}> {item.text} </Typography>
                       </CardContent>
                    </Card>
                     )
                   })
                 }
              </Box>
          </Box>

        </Box>

    </Layout>
  );
}

export default About;
