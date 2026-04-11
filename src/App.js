import { Routes, Route } from 'react-router-dom';
import UnfoundPage from "./Components/UnfoundPage.jsx";

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
import './Details.css';
import Details from "./Components/Details";

// <---- Custom Calendar Proj Page ---->
import './CustomCalendar.css';
import CustomCalendar from "./Components/CustomCalendar";

// <---- Resume Page ---->
import './Resume.css';
import Resume from "./Components/Resume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/CustomCalendar" element={<CustomCalendar />} />
      <Route path="*" element={<UnfoundPage />} />
    </Routes>
  );
};

export default App;