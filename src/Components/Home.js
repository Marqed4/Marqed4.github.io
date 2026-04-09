import { useEffect } from "react";

import bannerbackground from "../resources/art/Background Project/Gradients/Orange Glob Marble.gif"
import Navbar from "./Navbar.js"
import MediaPreviews from "./MediaPreviews.js"
import CustomCalendar from "./CustomCalendar.js"

const Home = () => {

  useEffect(() => {
  document.title = "Marqed's Homepage";
}, []);

  return ( 
    <>
      <div className="home-container">
        <Navbar/>
        <img src={bannerbackground} alt="" className="home-banner-bg" />

        <div className="home-content">
          <div className="home-card">
            <p>
            Hey, I’m Zach — most people online know me as Marqed.<br /><br />
            This is my personal website, where I share my work and projects as an aspiring professional developer & video editor.<br /><br />
            
            On this site, you can find a selection of my video edits, as well as some of my coding projects and other creative endeavors.
            </p>
          </div>
          <div className="home-card">
            <p>
            Thanks for stopping by, and I hope you enjoy exploring this site!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;