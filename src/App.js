import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <---- Landing Page ---->
import './HomeNavbar.css';
import './HomeBody.css';
import './HomeBanner.css';
import './HomeText.css';
import './YouTubeDropdown.css';
import './Details.css';
import './HomeEdit.css';
import Home from "./Components/Home";

// <---- Details Page ---->
import Details from "./Components/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;