import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import UnfoundPage from "./Components/UnfoundPage.jsx";

import './App.css';

// <---- Landing Page ---->
import './Components/Icon.css';
import './Components/Navbar.css';
import './Components/Footer.css'
import './Components/HomeBody.css';
import './Components/HomeBanner.css';
import './Components/HomePortfiolio.css'
import './Components/HomeText.css';
import './Components/YouTubeDropdown.css';
import './Components/HomeEditsShorts.css';
import './Components/HomeEdits.css';
import './Components/HomeShorts.css';
import './Components/MediaPreviews.css';

// <---- Landing Page ---->
import Home from "./Components/Home";

// <---- Details Page ---->
import './Components/Details.css';
import Details from "./Components/Details";

// <---- Projects Page ---->
import './Components/Projects.css';
import Projects from "./Components/Projects";

// <---- Gallery Page ---->
import './Components/Gallery.css';
import Gallery from "./Components/Gallery";

// <---- Resume Page ---->
import './Components/Resume.css';
import Resume from "./Components/Resume";

// <---- Diva FFMPEG Page ---->
import './Components/DivaFFMPEG.css';
import DivaFFMPEG from "./Components/DivaFFMPEG.js";

// <---- Sudoku Proj Page ---->
import './Components/SolveSudoku.css';
import Sudoku from "./Components/SolveSudoku.js";

// <---- Custom Calendar Proj Page ---->
import './Components/Calisigh.css';
import Calisigh from "./Components/Calisigh.js";

// <---- PopularVote Proj Page ---->
import './Components/PopularVote.css';
import PopularVote from "./Components/PopularVote.js";

// <---- Time Rabbit Proj Page ---->
import './Components/TimeRabbit.css';
import TimeRabbit from "./Components/TimeRabbit.js";

// <---- CodePath Page (url-only, no nav link) ---->
import './Components/CodePath.css';
import CodePath from "./Components/CodePath.js";

// <---- PopularVote Time Log Page (url-only, no nav link) ---->
import './Components/CISC_4900/CISC4900PopularVoteTimeLog.css';
import PopularVoteTimeLog from "./Components/CISC_4900/CISC4900PopularVoteTimeLog.js";

// <---- CISC 4900 PopularVote Page ---->
import './Components/CISC_4900/CISC4900PopularVote.css';
import CISC4900PopularVote from "./Components/CISC_4900/CISC4900PopularVote.js";

// <---- CISC 4900 PopularVote PowerPoint Page (url-only, no nav link) ---->
import './Components/CISC_4900/CISC4900PowerPoint.css';
import CISC4900PowerPoint from "./Components/CISC_4900/CISC4900PowerPoint.js";

import DefaultBackground from "./resources/art/Background Project/Gradients/Site.gif";

const App = () => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 40, damping: 20, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const bgX = useTransform(x, (v) => v * -14);
  const bgY = useTransform(y, (v) => v * -14);
  const contentX = useTransform(x, (v) => v * -50);
  const contentY = useTransform(y, (v) => v * -50);

  useEffect(() => {
    const handleMouseMove = (e) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <>
      <motion.img
        src={DefaultBackground}
        alt=""
        className="home-bg"
        style={{ x: bgX, y: bgY }}
      />
      <motion.div style={{ x: contentX, y: contentY }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/TimeRabbit" element={<TimeRabbit/>} />
          <Route path="/Calisigh" element={<Calisigh/>} />
          <Route path="/PopularVote" element={<PopularVote/>} />
          <Route path="/Sudoku" element={<Sudoku/>} />
          <Route path="/DivaFFMPEG" element={<DivaFFMPEG/>} />
          <Route path="/CodePath" element={<CodePath/>} />
          <Route path="/4900-PopularVote-TimeLog" element={<PopularVoteTimeLog/>} />
          <Route path="/4900-PopularVote-PowerPointPresentation" element={<CISC4900PowerPoint/>} />
          <Route path="/CISC-4900-Popular-Vote" element={<CISC4900PopularVote/>} />
          <Route path="*" element={<UnfoundPage/>} />
        </Routes>
      </motion.div>
    </>
  );
};

export default App;