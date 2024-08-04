import React, { useState, useEffect } from "react";
import Layout from "../Component/Layout/Layout";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Degree from "../image/Degree.jpg";
import { CardList, CardList2, CardList3 } from "../Data/Card";

function Course() {
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${Degree})`,
          width: "100%",
          height: "90vh",

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          "@media (max-width: 600px)": { width: "100%", height: "30vh" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            pt: 2,
            pl: 25,
            bgcolor: "black",
            width: "250px",
            height: "50px",
            color: "white",
            fontSize: "33px",
            "@media (max-width: 600px)": {
              width: "100px",
              height: 0,
              fontSize: "15px",
              p: 2,
              pt: 1,
            },
          }}
        >
          OUR COURSES
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#4b4b4b",
          color: "white",
          pt: 5,
          textAlign: "center",
          "@media (max-width:600px)": { pt: 2 },
        }}
      >
        <Typography
          sx={{ fontSize: 40, "@media (max-width: 600px)": { fontSize: 20 } }}
        >
          Undergraduate study (Degrees, Diplomas and Certificates)
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: 10,
            fontSize: 30,
            fontWeight: "bold",
            mx: 5,
            "@media (max-width: 600px)": { fontSize: 15, mt: 5 },
          }}
        >
          What our student say
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {CardList.map((item) => {
            return (
              <Card 
                sx={{
                  width: 400,
                  boxShadow: "none",
                  mt: 5,
                  "@media (max-width: 600px)": { width: 300 },
                }}
              >
                <CardMedia component="img" src={item.Img} />

                <CardContent>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {" "}
                    {item.text}{" "}
                  </Typography>
                  <Box sx={{ pt: 2, fontStyle: "italic" }}>
                    <Typography> {item.text1} </Typography>
                    <Typography> {item.text2} </Typography>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
      <hr style={{ marginTop: "100px" }} />
      <Box>
        <Typography
          sx={{
            mt: 10,
            fontSize: 40,
            fontFamily: "inherit",
            mx: 5,
            "@media (max-width: 600px)": { mt: 5, fontSize: 20 },
          }}
        >
          Find our more
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {CardList2.map((item) => {
            return (
              <Card
                sx={{
                  width: 400,
                  boxShadow: "none",
                  mt: 10,
                  "@media (max-width: 600px)": { width: 300, mt: 5 },
                }}
              >
                <CardMedia component="img" src={item.Img} />
                <CardContent>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography sx={{ pt: 1 }}> {item.text} </Typography>
                  <Typography> {item.page} </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>

      <hr style={{ marginTop: "100px" }} />

      <Box>
        <Typography
          sx={{
            fontSize: 30,
            mt: 10,
            fontWeight: "bold",
            mx: 20,
            "@media (max-width: 600px)": { mx: 8, fontSize: 15 },
          }}
        >
          All Undergraduate Course
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {CardList3.map((item) => {
            return (
              <Card
                sx={{
                  width: 400,
                  height: 180,
                  pt: 2,
                  boxShadow: "none",
                  borderBottom: 1,
                }}
                className="card"
              >
                <CardContent>
                  <Typography sx={{ fontStyle: "italic" }}>
                    {" "}
                    {item.tag}{" "}
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography sx={{ fontFamily: "revert", pt: 2 }}>
                    {" "}
                    {item.text}{" "}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <button className="ButtonCourse">
          Show all Courses
        </button>
      </Box>
    </Layout>
  );
}

export default Course;
