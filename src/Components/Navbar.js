import { useState, useRef} from "react";
import { Link } from "react-router-dom";

import Logo from "../Resources/art/Background Project/Gradients/Orange Glob Marble Head.gif"

import GospelAudio from "../Resources/sound/Gospel.mp3";
import SpellAudio from "../Resources/sound/Spell.mp3";
import LeniAudio from "../Resources/sound/Leni.mp3";
import OnlinePersonaAudio from "../Resources/sound/OnlinePersona.mp3"

import HomeIcon from "../Resources/art/Home.png";
import HomeNavbarActive from "../Resources/art/Background Project/Gradients/Home Navbar Active.gif"
import HomeNavbarInactive from "../Resources/art/Background Project/Gradients/Home Navbar Inactive.gif"

import DetailsIcon from "../Resources/art/Details.png";
import DetailsNavbarActive from "../Resources/art/Background Project/Gradients/Details Navbar Active.gif"
import DetailsNavbarInactive from "../Resources/art/Background Project/Gradients/Details Navbar Inactive.gif"

import YoutubeIcon from "../Resources/art/Youtube.png";
import YoutubeNavbarActive from "../Resources/art/Background Project/Gradients/YouTube Navbar Active.gif"
import YoutubeNavbarInactive from "../Resources/art/Background Project/Gradients/YouTube Navbar Inactive.gif"

import GitHubIcon from "../Resources/art/GitHub.png";
import GithubNavbarActive from "../Resources/art/Background Project/Gradients/GitHub Navbar Active.gif"
import GithubNavbarInactive from "../Resources/art/Background Project/Gradients/GitHub Navbar Inactive.gif"


const Navbar = () => 
{
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeNavbarGif, setHomeNavbarGif] = useState(HomeNavbarInactive);
  const [detailsNavbarGif, setDetailsNavbarGif] = useState(DetailsNavbarInactive);
  const [youtubeNavbarGif, setYoutubeNavbarGif] = useState(YoutubeNavbarInactive);
  const [githubNavbarGif, setGithubNavbarGif] = useState(GithubNavbarInactive);

  const SpellRef = useRef(null)
  const GospelRef = useRef(null)
  const LeniRef = useRef(null)
  const OnlinePersonaRef = useRef(null)
  const isPlayingRef = useRef(false);


  const stopHoverAudio = () => 
  {
    [SpellRef, GospelRef, LeniRef, OnlinePersonaRef].forEach(ref => 
    {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
    isPlayingRef.current = false;
  };

  const playOnlinePersona = () => 
  {
    stopHoverAudio();
    OnlinePersonaRef.current = new Audio(OnlinePersonaAudio);
    OnlinePersonaRef.current.volume = 0.05;
    OnlinePersonaRef.current.play().then(() => 
    {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playGospel = () => 
  {
    stopHoverAudio();
    GospelRef.current = new Audio(GospelAudio);
    GospelRef.current.volume = 0.05;
    GospelRef.current.play().then(() => 
    {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playSpell = () => 
  {
    stopHoverAudio();
    SpellRef.current = new Audio(SpellAudio);
    SpellRef.current.volume = 0.03;
    SpellRef.current.play().then(() => 
    {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playLeni = () => 
  {
    stopHoverAudio();
    LeniRef.current = new Audio(LeniAudio);
    LeniRef.current.volume = 0.03;
    LeniRef.current.play().then(() => 
    {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  return (
    <nav>
      <div className="nav-logo-contianer">
        <img src={Logo} alt=""/>
      </div>

      {/* The Desktop Menu */}
      <div className="Navbar-links-container">

        <a href="/" className="nav-btn"
          onMouseEnter={() => { playGospel(); setHomeNavbarGif(HomeNavbarActive); }}
          onMouseLeave={() => { stopHoverAudio(); setHomeNavbarGif(HomeNavbarInactive); }}
        >
          <img src={homeNavbarGif} className="home-button" alt="Home" />
          <img src={HomeIcon} alt="Home" className="home-link-icon"/>
        </a>

        <Link to="/details" className="nav-btn"
          onMouseEnter={() => { playOnlinePersona(); setDetailsNavbarGif(DetailsNavbarActive); }}
          onMouseLeave={() => { stopHoverAudio(); setDetailsNavbarGif(DetailsNavbarInactive); }}
          onClick={stopHoverAudio}
        >
          <img src={detailsNavbarGif} className="details-button" alt="Details" />
          <img src={DetailsIcon} alt="Details" className="details-link-icon"/>
        </Link>

        <div className="dropdown-container"
          onMouseEnter={() => { playSpell(); setYoutubeNavbarGif(YoutubeNavbarActive); }}
          onMouseLeave={() => { stopHoverAudio(); setYoutubeNavbarGif(YoutubeNavbarInactive); }}
        >
          <a href="https://www.youtube.com/Marqed" className="nav-btn">
            <img src={youtubeNavbarGif} className="youtube-button" alt="YouTube" />
            <img src={YoutubeIcon} alt="YouTube" className="youtube-link-icon"/>
          </a>
          <div className="dropdown-menu">
            <a href="https://www.youtube.com/Marqed/videos">Edits</a>
            <a href="https://www.youtube.com/Marqed/shorts">Shorts</a>
          </div>
        </div>

        <a href="https://github.com/Marqed4" className="nav-btn"
          onMouseEnter={() => { playLeni(); setGithubNavbarGif(GithubNavbarActive); }}
          onMouseLeave={() => { stopHoverAudio(); setGithubNavbarGif(GithubNavbarInactive); }}
        >
          <img src={githubNavbarGif} className="github-button" alt="GitHub" />
          <img src={GitHubIcon} alt="GitHub" className="github-link-icon"/>
        </a>

      </div>

      {/*only shows on small screens like iphone*/}
      {/* Hamburger icon - only shows on small screens like iphone*/}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* The Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/" className="nav-btn"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setHomeNavbarGif(HomeNavbarActive)}
            onMouseLeave={() => setHomeNavbarGif(HomeNavbarInactive)}
          >
            <img src={homeNavbarGif} className="home-button" alt="Home" />
            <img src={HomeIcon} alt="Home" className="home-link-icon"/>
          </a>
          <Link to="/details" className="nav-btn"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setDetailsNavbarGif(DetailsNavbarActive)}
            onMouseLeave={() => setDetailsNavbarGif(DetailsNavbarInactive)}
          >
            <img src={detailsNavbarGif} className="details-button" alt="Details" />
            <img src={DetailsIcon} alt="Details" className="details-link-icon"/>
          </Link>
          <a href="https://www.youtube.com/Marqed" className="nav-btn"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setYoutubeNavbarGif(YoutubeNavbarActive)}
            onMouseLeave={() => setYoutubeNavbarGif(YoutubeNavbarInactive)}
          >
            <img src={youtubeNavbarGif} className="youtube-button" alt="YouTube" />
            <img src={YoutubeIcon} alt="YouTube" className="youtube-link-icon"/>
          </a>
          <a href="https://github.com/Marqed4" className="nav-btn"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setGithubNavbarGif(GithubNavbarActive)}
            onMouseLeave={() => setGithubNavbarGif(GithubNavbarInactive)}
          >
            <img src={githubNavbarGif} className="github-button" alt="GitHub" />
            <img src={GitHubIcon} alt="GitHub" className="github-link-icon"/>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;