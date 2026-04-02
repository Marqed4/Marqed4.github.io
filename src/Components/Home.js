import { useEffect } from "react";

import bannerbackground from "../Resources/art/Background Project/Gradients/Orange Glob Marble.gif"
import introheader from "../Resources/art/Background Project/Gradients/Name Header.gif"
import Navbar from "./Navbar.js"
import MediaPreviews from "./MediaPreviews.js"

const Home = () => {

  useEffect(() => {
  document.title = "Marqed's Homepage";
}, []);

  return ( 
    <>
      <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <img src={bannerbackground} alt="" />
        </div>
        <div className="home-name-text-container">
          <img 
            src={introheader}
            alt="Hey, I'm Zachery / Marqed"
            className="intro-header"
          />
          <p>
            Content creator and developer based out of Brooklyn, New York. <br />
            I make YouTube edits, shorts, mods, apps, websites, and much more! <br />
            This is my corner of the internet — have a look around.
          </p>
        </div>
      </div>

      <MediaPreviews />
    </>
  );
};

export default Home;