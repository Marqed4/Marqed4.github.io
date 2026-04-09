import { useEffect } from "react";
import Navbar from "./Navbar.js"

import CustomCalendarLogo from "../resources/art/Background Project/Gradients/Custom Calendar.gif"
import Made from "../resources/art/Background Project/Gradients/Made Inactive.gif"
import Overview from "../resources/art/Background Project/Gradients/Overview Inactive.gif"
import Features from "../resources/art/Background Project/Gradients/Features Inactive.gif"
import Architecture from "../resources/art/Background Project/Gradients/Architecture Inactive.gif"

const CustomCalendar = () => {

  useEffect(() => {
    document.title = "Marqed's Custom Calendar";
  }, []);

  return (
    <div className="custom-calendar-container">
      <Navbar/>
      <h1><img src={CustomCalendarLogo} className="custom-calendar-logo" alt="CustomCalendarLogo"/></h1>

      <div className="custom-calendar-content">

        <div className="custom-calendar-layout-made">
          <h2 className="made-with-header">
            <img src={Made} className="made-with" alt="Made" />
          </h2>
          <div className="introduction-container">
            <h2 className="custom-calendar-intro-header">
            </h2>
            <p className="introduction-body">
              Build Tools: Maven, Cargo, Node.js/Vite<br/><br/>
              Frontend: React (Tauri)<br/><br/>
              Backend: Spark Java (embedded REST server)<br/><br/>
              Desktop: Tauri (Rust + WebView)<br/><br/>
              Lang: Java, Rust, JavaScript/TypeScript, HTML/CSS<br/><br/>
            </p>
          </div>
        </div>

        <div className="custom-calendar-layout-overview">
          <h2 className="custom-calendar-overview-header">
            <img src={Overview} className="overview-header" alt="Overview" />
          </h2>
          <p className="overview-body">
            CustomCalendar is a desktop application built with Tauri, combining a
            Java-powered backend with a React frontend. The app runs a local Spark Java
            REST server inside the JAR, which the Rust/Tauri layer communicates with
            to serve calendar data to the UI.
          </p>
        </div>

        <div className="custom-calendar-layout-features">
          <h2 className="custom-calendar-features-header">
            <img src={Features} className="features-header" alt="Features" />
          </h2>
          <p className="features-body">
            • Custom calendar views and event management<br/>
            • Embedded REST API via Spark Java<br/>
            • Native desktop experience via Tauri + WebView<br/>
            • React-based UI with Vite for fast builds<br/>
            • Packaged as a standalone JAR (customcalendar.jar)<br/>
          </p>
        </div>

        <div className="custom-calendar-layout-architecture">
          <h2 className="custom-calendar-architecture-header">
            <img src={Architecture} className="architecture-header" alt="Architecture" />
          </h2>
          <p className="architecture-body">
            React (UI)<br/>
            ↓<br/>
            Tauri (Rust + WebView)<br/>
            ↓<br/>
            Spark Java REST Server<br/>
            ↓<br/>
            Calendar Logic (Java/JDK)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;