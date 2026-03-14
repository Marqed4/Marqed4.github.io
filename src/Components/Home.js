import "../Components/Home.js"
import Navbar from "./Navbar.js"
import bannerbackground from "../Resources/art/Background Project/Orange Glob.png"
// import bannerbackground from "../Resources/art/Background Project/Orange Glob Animations.mp4"

const Home = () => {
  return ( 
  <div className = "home-container">
    <Navbar/>
    <div className = "home-banner-container">
        <div className = "home-bannerImage-container">
        <img src = {bannerbackground} alt = "" />
        </div>
    </div>
  </div>
  );
};

export default Home;