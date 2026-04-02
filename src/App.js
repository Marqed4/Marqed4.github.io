import { Routes, Route } from 'react-router-dom';

// <---- Landing Page ---->
import './HomeNavbar.css';
import './HomeBody.css';
import './HomeBanner.css';
import './HomeText.css';
import './YouTubeDropdown.css';
import './HomeEditsShorts.css';
import './HomeEdits.css';
import './HomeShorts.css';
import './MediaPreviews.css';
import Home from "./Components/Home";

// <---- Details Page ---->
import Details from "./Components/Details";
import './Details.css';
import MediaPreviews from "./Components/MediaPreviews";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default App;