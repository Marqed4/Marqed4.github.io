import bannerbackground from "../Resources/art/Background Project/Gradients/Orange Glob Marble.gif"
import Navbar from "./Navbar.js"
import HomeEdits from "./HomeEdits.js"
import HomeShorts from "./HomeShorts.js"


const Home = () => {
  return ( 
    <>
      <div className = "home-container">
        <Navbar/>
        <div className = "home-banner-container">
          <img src = {bannerbackground} alt = "" />
        </div>
        <div className = "home-layout" />
        <div className = "home-name-text-container">
          <h1>Hey, I'm Zachery/Marqed</h1>
          <p>
            Content creator and developer based out of Brooklyn, New York. <br />
            I make YouTube edits, shorts, mods, apps, websites, and much more! <br />
            This is my corner of the internet — have a look around.
          </p>
        </div>
      </div>

      <div className = "HomePageMediaPreviews">
        <div className = "EditsPreviewContainer">
          <HomeEdits/>
        </div>

        <div className = "ShortsPreviewContainer">
          <HomeShorts/>
        </div>
      </div>
    </>
  );
};

export default Home;
