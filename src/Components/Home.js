import { useEffect, useState } from "react";

import HomeBanner from "../resources/art/Background Project/Gradients/Orange Glob Marble.gif"
import Icon from "./Icon.js";
import Navbar from "./Navbar.js"
import Footer from "./Footer.jsx"
import MediaPreviews from "./MediaPreviews.js"
import Calsigh from "./Calisigh.js"
import Projects, { ProjectsInactive, ProjectsActive } from "./Projects.js";
import Gallery, { GalleryInactive, GalleryActive } from "./Gallery.js";

function HomeItem({ labelActive, labelInactive, iconActive, iconInactive, labelClass, iconClass, hovered }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", flexShrink: 0, pointerEvents: "none" }}>
      <img
        src={hovered ? labelActive : labelInactive}
        alt=""
        className={labelClass}
        style={{ display: "block", pointerEvents: "none" }}
      />
      <img
        src={hovered ? iconActive : iconInactive}
        alt=""
        className={iconClass}
        style={{ position: "absolute", pointerEvents: "none" }}
      />
    </span>
  );
}

const Home = () => {

  const [projectsHovered, setProjectsHovered] = useState(false);
  const [galleryHovered, setGalleryHovered] = useState(false);

  useEffect(() => {
  document.title = "Marqed's Homepage";
  }, []);

  return ( 
    <>
      <div className="home-container">
        {/* <Icon/> */}
        <Navbar/>
        <img src={HomeBanner} alt="" className="home-banner-bg" />
        <div className="home-banner-mirror-top" aria-hidden="true">
          <img src={HomeBanner} alt="" />
        </div>
        <div className="home-banner-mirror-right" aria-hidden="true">
          <img src={HomeBanner} alt="" />
        </div>
        <div className="home-banner-mirror-corner" aria-hidden="true">
          <img src={HomeBanner} alt="" />
        </div>

        <div className="home-content">
          <div className="home-card">
            <p>
            Hey, I’m Zach! Most people online know me as Marqed.<br /><br />
            This is my personal website, where I share my work and projects as an aspiring professional developer.<br /><br />
            
            On this site, you can find a broad selection of personal/joint coding projects and other creative endeavors.
            </p>
          </div>
          <div className="home-card">
            <p>
            Thanks for stopping by, and I hope you enjoy exploring this site!
            </p>
          </div>
          <div className="home-card portfolio-card">
            <div className="portfolio-buttons">
              <a href="/Projects">
                <div className="portfolio-container-projects"
                  onMouseEnter={() => setProjectsHovered(true)}
                  onMouseLeave={() => setProjectsHovered(false)}
                 >
                 <HomeItem
                  labelActive={ProjectsActive}
                  labelInactive={ProjectsInactive}
                  labelClass="projects-button"
                  hovered={projectsHovered}
                 />
                </div>
              </a>
              <a href="/Gallery">
                <div className="portfolio-container-gallery"
                  onMouseEnter={() => setGalleryHovered(true)}
                  onMouseLeave={() => setGalleryHovered(false)}
                >
                  <HomeItem
                    labelActive={GalleryActive}
                    labelInactive={GalleryInactive}
                    labelClass="gallery-button"
                    hovered={galleryHovered}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;