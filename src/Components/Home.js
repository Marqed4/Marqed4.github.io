import bannerbackground from "../Resources/art/Background Project/Orange Glob.gif"
import Navbar from "./Navbar.js"
import HomeEdits from "./HomeEdits.js"


const Home = () => {
  return ( 
    <>
      <div className = "home-container">
        <Navbar/>
        <div className = "home-banner-container">
          <img src = {bannerbackground} alt = "" />
        </div>
        <div className = "home-layout" />  {/* backdrop only, no children */}
        <div className = "home-name-text-container">
          <h1>Hey, I'm Zachery/Marqed</h1>
          <p>
            Video editor, content creator and developer based out of Brooklyn, New York. <br />
            I make YouTube edits, shorts, mods, apps, websites, and much more! <br />
            This is my corner of the internet — have a look around.
          </p>
        </div>
      </div>

      <div className = "EditsPreviewContainer">
        <HomeEdits/>
      </div>
    </>
  );
};

export default Home;
