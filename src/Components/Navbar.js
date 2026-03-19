import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Resources/art/Marqed 250.ico"
import GospelAudio from "../Resources/sound/Gospel.mp3";
import SpellAudio from "../Resources/sound/Spell.mp3";
import LeniAudio from "../Resources/sound/Leni.mp3";
import OnlinePersonaAudio from "../Resources/sound/OnlinePersona.mp3"
import HomeIcon from "../Resources/art/Home.png";
import DetailsIcon from "../Resources/art/Details.png";
import YoutubeIcon from "../Resources/art/Youtube.png";
import GitHubIcon from "../Resources/art/GitHub.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const SpellRef = useRef(null)
  const GospelRef = useRef(null)
  const LeniRef = useRef(null)
  const OnlinePersonaRef = useRef(null)
  const isPlayingRef = useRef(false);

  useEffect(() => {
    return () => {
      stopHoverAudio();
    };
  }, []);

  const playOnlinePersona = () => {
    OnlinePersonaRef.current = new Audio(OnlinePersonaAudio);
    OnlinePersonaRef.current.volume = 0.05;
    OnlinePersonaRef.current.play().then(() => {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playGospel = () => {
    GospelRef.current = new Audio(GospelAudio);
    GospelRef.current.volume = 0.05;
    GospelRef.current.play().then(() => {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playSpell = () => {
    SpellRef.current = new Audio(SpellAudio);
    SpellRef.current.volume = 0.03;
    SpellRef.current.play().then(() => {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const playLeni = () => {
    LeniRef.current = new Audio(LeniAudio);
    LeniRef.current.volume = 0.03;
    LeniRef.current.play().then(() => {
      isPlayingRef.current = true;
    }).catch((err) => { console.log("Audio play failed:", err); });
  };

  const stopHoverAudio = () => {
    if (SpellRef.current && isPlayingRef.current) {
      SpellRef.current.pause();
      SpellRef.current.currentTime = 0;
    }
    if (OnlinePersonaRef.current && isPlayingRef.current) {
      OnlinePersonaRef.current.pause();
      OnlinePersonaRef.current.currentTime = 0;
    }
    if (LeniRef.current && isPlayingRef.current) {
      LeniRef.current.pause();
      LeniRef.current.currentTime = 0;
    }
    if (GospelRef.current && isPlayingRef.current) {
      GospelRef.current.pause();
      GospelRef.current.currentTime = 0;
    }
  };

  return (
    <nav>
      <div className="nav-logo-contianer">
        <img src={Logo} alt=""/>
      </div>

      {/* Desktop links */}
      <div className="Navbar-links-container">
        <a href="/" onMouseEnter={playGospel} onMouseLeave={stopHoverAudio}>
          Home <img src={HomeIcon} alt="Home" className="home-link-icon"/>
        </a>
        <Link to="/details" onMouseEnter={playOnlinePersona} onMouseLeave={stopHoverAudio} onClick={stopHoverAudio}>
          Details <img src={DetailsIcon} alt="Details" className="details-link-icon"/>
        </Link>
        <div className="dropdown-container" onMouseEnter={playSpell} onMouseLeave={stopHoverAudio}>
          <a href="https://www.youtube.com/Marqed">
            YouTube <img src={YoutubeIcon} alt="YouTube" className="youtube-link-icon"/>
          </a>
          <div className="dropdown-menu">
            <a href="https://www.youtube.com/Marqed/videos">Edits</a>
            <a href="https://www.youtube.com/Marqed/shorts">Shorts</a>
          </div>
        </div>
        <a href="https://github.com/Marqed4" onMouseEnter={playLeni} onMouseLeave={stopHoverAudio}>
          GitHub <img src={GitHubIcon} alt="GitHub" className="github-link-icon"/>
        </a>
      </div>

      {/* Hamburger icon - only shows on small screens like iphone*/}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="" onClick={() => setMenuOpen(false)}>
            Home <img src={HomeIcon} alt="Home" className="home-link-icon"/>
          </a>
          <Link to="/details" onClick={() => setMenuOpen(false)}>
            Details <img src={DetailsIcon} alt="Details" className="details-link-icon"/>
          </Link>
          <a href="https://www.youtube.com/Marqed" onClick={() => setMenuOpen(false)}>
            YouTube <img src={YoutubeIcon} alt="YouTube" className="youtube-link-icon"/>
          </a>
          <a href="https://github.com/Marqed4" onClick={() => setMenuOpen(false)}>
            GitHub <img src={GitHubIcon} alt="GitHub" className="github-link-icon"/>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;