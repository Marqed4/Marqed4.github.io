import "../Components/Home.js"
import Navbar from "./Navbar.js"
import bannerbackground from "../Resources/art/Background Project/Orange Glob.gif"
import { Gif } from "@mui/icons-material";

const Home = () => {
  return ( 
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <img src={bannerbackground} alt="" />
      </div>
      <div className="home-name-text-container">
        <h1>Zachery</h1>
        <p>
        I'm a video editor and developer based out of New York. <br />
        I make YouTube edits, montages, mods, apps, websites, and more! <br />
        This is my corner of the internet — have a look around.
        </p>
      </div>
    </div>
  );
};

export default Home;


// how to play video
      //  <video 
      //     autoPlay 
      //     muted 
      //     loop 
      //     playsInline 
      //     className="background-video"
      //   >
      //     <source src={bannerbackground} type="video/mp4" />
      //     Your browser does not support the video tag.
      //     </video>