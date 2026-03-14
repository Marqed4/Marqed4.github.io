import { useState, useRef } from "react";
import React from 'react'
import Logo from "../Resources/art/Profile.jpg"
import GospelAudio from "../Resources/sound/Gospel.mp3"; // "Yves Tumor - Gospel For A New Century"
import SpellAudio from "../Resources/sound/Spell.mp3"; // "Snow Strippers - Under Your Spell"
import LeniAudio from "../Resources/sound/Leni.mp3"; // "Crystal Castles - Leni"
import OnlinePersonaAudio from "../Resources/sound/OnlinePersona.mp3" // "Pisca - Online Persona"
import HomeIcon from "../Resources/art/Home.png"; //  https://openmoji.org/
import DetailsIcon from "../Resources/art/Details.png"; //  https://openmoji.org/
import YoutubeIcon from "../Resources/art/Youtube.png"; //  https://openmoji.org/
import GitHubIcon from "../Resources/art/GitHub.png"; //  https://openmoji.org/
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

const Navbar = () => {

  const SpellRef = useRef(null)
  const GospelRef = useRef(null)
  const LeniRef = useRef(null)
  const OnlinePersonaRef = useRef(null)
  const isPlayingRef = useRef(false);

const playOnlinePersona = () => {
  OnlinePersonaRef.current = new Audio(OnlinePersonaAudio);
  OnlinePersonaRef.current.volume = 0.05;
  OnlinePersonaRef.current.play().then(() => {
  isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
};

  const playGospel = () => {
  GospelRef.current = new Audio(GospelAudio);
  GospelRef.current.volume = 0.05;
  GospelRef.current.play().then(() => {
  isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
};

const playSpell = () => {
  SpellRef.current = new Audio(SpellAudio);
  SpellRef.current.volume = 0.03;
  SpellRef.current.play().then(() => {
  isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
};

const playLeni = () => {
  LeniRef.current = new Audio(LeniAudio);
  LeniRef.current.volume = 0.03;
  LeniRef.current.play().then(() => {
  isPlayingRef.current = true;
  }).catch((err) => {
    console.log("Audio play failed:", err);
  });
}

  const stopHoverAudio = () => 
  {
  if (SpellRef.current && isPlayingRef.current) 
    {
      SpellRef.current.pause();
      SpellRef.current.currentTime = 0;
    }

  if (OnlinePersonaRef.current && isPlayingRef.current)
  {
      OnlinePersonaRef.current.pause();
      OnlinePersonaRef.current.currentTime = 0;
  }

  if (LeniRef.current && isPlayingRef.current)
  {
      LeniRef.current.pause();
      LeniRef.current.currentTime = 0;
  }

    if (GospelRef.current && isPlayingRef.current)
  {
      GospelRef.current.pause();
      GospelRef.current.currentTime = 0;
  }
};

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home", 
      icon: <HomeIcon/>
    },
    {
      text: "Details", 
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

        <a href = 
        ""
        onMouseEnter = {playGospel} 
        onMouseLeave = {stopHoverAudio}>
          Home <img src = {HomeIcon} alt = "Home" className = "home-link-icon"/>
          </a>

        <a href = 
        ""
        onMouseEnter = {playOnlinePersona}
        onMouseLeave = {stopHoverAudio}>
          Details <img src = {DetailsIcon} alt = "Details" className = "details-link-icon"/> 
        </a>

        <a href = 
        "https://www.youtube.com/Marqed" 
        onMouseEnter = {playSpell} 
        onMouseLeave = {stopHoverAudio}>
          YouTube <img src = {YoutubeIcon} alt = "YouTube" className = "youtube-link-icon"/>
          </a>

        <a href = 
        "https://github.com/Marqed4"
        onMouseEnter = {playLeni} 
        onMouseLeave = {stopHoverAudio}>
        GitHub <img src = {GitHubIcon} alt = "GitHub" className = "github-link-icon"/>
        </a>
      </div>
  
  </nav>
  }

export default Navbar;