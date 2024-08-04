import React from "react";
import Layout from "../Component/Layout/Layout";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Unipic2 from "../image/unipic2.jpg";

import "../Style/Home.css";
import { CardList4, CardList5 } from "../Data/Card";
import { Accordion1 } from "../Data/Accordion";

function Home() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${Unipic2})`,
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          

          "@media (max-width: 600px)": { width: "100%", height: "30vh" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "cooper",
            color: "white",
            fontSize: "30px",
            mt: 5,
            "@media (max-width: 600px)": { fontSize: "15px" },
          }}
        >
          STUDY YOUR DEGREE WITH US
        </Typography>
      </Box>

      <Box
        sx={{
          pt: 5,
          mx: 30,
          textAlign: "center",
          "@media (max-width: 600px)": { mx: 5, textAlign: "left", pt: 2 },
        }}
      >
        <Typography
          sx={{ fontSize: 20, fontFamily: "inherit", fontWeight: "bold" }}
        >
          The University of London is a unique federation of seventeen
          independent higher education institutions, delivering world-leading
          education and research across all disciplines.
        </Typography>
      </Box>

      <Box sx={{ mx: 5, mt: 10 }}>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "inherit",
            "@media (max-width: 600px)": { fontSize: 20 },
          }}
        >
          Our federation in numbers
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          mt: 5,
          flexWrap: "wrap",
        }}
      >
        {CardList4.map((item) => {
          return (
            <Card sx={{ width: 300, height: 250, border: 1 }} className="box" >
              <CardContent>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    textAlign: "center",
                    pt: 2,
                  }}
                >
                  {" "}
                  {item.title}{" "}
                </Typography>
                <Typography
                  sx={{
                    width: 20,
                    height: 20,
                    border: 2,
                    borderRadius: 50,
                    borderColor: "red",
                    borderWidth: 3,
                    p: 6,
                    ml: 8,
                    mt: 3,
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "inherit",
                  }}
                >
                  {" "}
                  {item.number}{" "}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      <hr style={{ marginTop: "8%", width: "100%" }} />

      <Box sx={{ mt: 10, px: 5 }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: "bold",
            fontSize: 35,
            "@media (max-width: 600px)": { fontSize: 20, textAlign: "center" },
          }}
        >
          Benefits for members
        </Typography>
        <Typography
          sx={{
            mx: 40,
            fontFamily: "monospace",
            pt: 5,
            "@media (max-width: 600px)": { mx: 0, pt: 2, textAlign: "justify" },
          }}
        >
          As a student or member of staff at one of our federation members, you
          have access to a range of resources and facilities through the
          University of London.
        </Typography>
      </Box>

      <Box sx={{ mt: 20, "@media (max-width: 600px)": { mt: 10 } }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <img
              src="https://images.unsplash.com/photo-1520315397185-1ed215491386?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="imgPhoto"
            />
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              bgcolor: "#03002e",
              height: 500,
              "@media (max-width: 600px)": { height: 300 },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 30,
                fontFamily: "inherit",
                fontWeight: "bold",
                textAlign: "center",
                mt: 15,
                mx: 10,
                "@media (max-width: 600px)": { fontSize: 15, mt: 5, mx: 5 },
              }}
            >
              Free membership of Senate House Library
            </Typography>

            <Typography
              sx={{
                color: "white",
                mt: 2,
                fontFamily: "inherit",
                textAlign: "center",
                mx: 15,
                "@media (max-width: 600px)": { mx: 5, textAlign: "inherit" },
              }}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              repudiandae neque odio soluta, veniam rem nulla saepe consectetur?
              Illo, reprehenderit!{" "}
            </Typography>

            <Box>
              <button className="button">Find out more</button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: 10,
            fontFamily: "inherit",
            fontWeight: "bold",
            fontSize: 35,
            mx: 5,
            "@media (max-width: 600px)": { fontSize: 20, mx: 5, mt: 5 },
          }}
        >
          History of the University of London federation
        </Typography>

        <Typography
          sx={{
            mx: 50,
            textAlign: "-webkit-match-parent",
            mt: 5,
            fontFamily: "revert-layer",
            "@media (max-width: 600px)": {
              mx: 5,
              mt: 2,
              fontFamily: "inherit",
            },
          }}
        >
          The University of London federation began in its earliest form in
          1836, after the University was awarded its first Royal Charter. At
          that time, the University of London acted as a degree-awarding
          examination board for students from two colleges - University College
          London and King’s College London - but in 1900 was reconstituted into
          the federal structure we recognise today. <br /> <br />
          Over the past two centuries, the University of London federation has
          grown and changed, but the core purpose of collaboration and
          delivering some of the UK’s best higher education and research has
          remained the same. Our federation members are all independent
          institutions in their own right and vary widely in size and subject,
          but all offer the world-leading education that the University of
          London federation is known for.
          <br /> <br />
          Collectively, the federation’s impact on London is great. Located
          across the city, our members are embedded in their communities,
          shaping local areas and contributing to local economies through their
          focus on civic engagement.
          <br /> <br />
          Today, the University of London federation represents one of the
          largest and most diverse student bodies in the world, with over
          250,000 students from 190 countries.
        </Typography>
      </Box>

      <Box sx={{ mt: 10, mx: 5 }}>
        <Typography
          sx={{ fontSize: 30, fontWeight: "bold", fontFamily: "inherit", '@media (max-width: 600px)':{fontSize:15} }}
        >
          Specialist Centres
        </Typography>

        <Box sx={{mx: 40, mt: 10 , '@media (max-width: 600px)':{mx:2, mt:5}}}>
          {Accordion1.map((item) => {
            return (
              <Accordion sx={{boxShadow:'none' , borderBottom:1, }}>
                <AccordionSummary
                  expandIcon={<CallReceivedIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  
                >
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: "bold",
                      fontFamily: "inherit",
                      p:3,
                      '@media (max-width: 600px)':{fontSize:13,}
                    }}
                  >
                    
                    {item.title},{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography  sx={{ fontFamily: "monospace",  }} > {item.text} </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

      </Box>
      <hr style={{ marginTop: "8%", width: "100%" }} />

   <Box sx={{mt:10, mx:5}}>
      <Typography sx={{fontSize:30, fontFamily:'inherit',fontWeight:'bold'}}>Related Content</Typography>
   </Box>
    
        <Box sx={{mt:10, display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:2}}>
           {
             CardList5.map((item) => {
               return(
                 <Card sx={{width:300}} className="card-animation">
                   <CardMedia component='img' src={item.Img} />

                    <CardContent>
                      <Typography sx={{fontSize:20, fontWeight:'bold'}}> {item.title} </Typography>
                      <Typography sx={{fontFamily:'vardana', pt:2}}> {item.text} </Typography>
                    </CardContent>
                 </Card>
               )
             })
           }
        </Box>
    </Layout>
  );
}

export default Home;
