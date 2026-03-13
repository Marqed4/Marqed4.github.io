import { useState, useRef } from "react";
import React from 'react'
import Logo from "../Resources/art/Profile.jpg"
import FonshwayAudio from "../Resources/sound/Fonshway.mp3";
import {HiOutlineBars3} from "react-icons/hi2" //import {HiOutlineBars3} from "react-icons/bs"
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"

const Navbar = () => {

  const FonshwayRef = useRef(null)

const playFonshway = () => {
    FonshwayRef.current = new Audio(FonshwayAudio);
    FonshwayRef.current.volume = 0.05;
    FonshwayRef.current.play();
  };

  const stopHoverAudio = () => {
  if (FonshwayRef.current)
  {
    FonshwayRef.current.pause();
    FonshwayRef.current.currentTime = 0;
  }
};

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home", 
      icon: <HomeIcon/>
    },
    {
      text: "About", 
      icon: <HomeIcon/>
    },
    {
      text: "YouTube", 
      icon: <HomeIcon/>
    }
    ,
    {
      text: "GitHub", 
      icon: <HomeIcon/>
    }
  ]

  return <nav>
      <div className = "nav-logo-contianer">
        <img src = {Logo} alt = ""/>
      </div>

      <div className = "Navbar-links-container">
        <a href = "">Home</a>
        <a href = "">About</a>
        <a href = 
        "https://www.youtube.com/Marqed" 
        onMouseEnter = {playFonshway} 
        onMouseLeave = {stopHoverAudio}>YouTube</a>
        <a href = "https://github.com/Marqed4">GitHub</a>
      </div>

  </nav>
}

export default Navbar;