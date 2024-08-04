import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width:'200px' }}
    >
      <Typography variant="h6" flexGrow={1} sx={{fontFamily:'inherit', pt:2, fontWeight:'bold'}}>
        Landon university
      </Typography>
       <Divider />

      <ul className="navigation-menu">
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/course"}>Our Courses</Link>
        </li>

        <li>
          <Link to={"/about"}>About Us</Link>
        </li>

       

        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      {" "}
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#4b4b4b", height: 65 }} >
          <Toolbar>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" flexGrow={1} sx={{  fontFamily:'inherit', fontWeight:'bold'}}>
              Landon university
            </Typography>

            <Box sx={{ mr:10, display: { xs: "none", sm: "block"} }}>
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home </Link>
                </li>
                <li>
                  <Link to={"/course"}>Our Course</Link>
                </li>

                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>

              

                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
         <Box>
          <Toolbar />
         </Box>
      </Box>
    </>
  );
};

export default Header;
