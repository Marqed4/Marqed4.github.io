import { useEffect } from "react";
import Navbar from "./Navbar.js"
import DetailsNavbarInactive from "../resources/art/details page graphic header/Details Navbar Inactive.gif"
import ContactDetailsInactive from "../resources/art/details page graphic header/Contacts Details Inactive.gif"
import EducationDetailsInactive from "../resources/art/details page graphic header/Education Details Inactive.gif"
import InterestsDetailsInactive from "../resources/art/details page graphic header/Interests Details Inactive.gif"
import EditingSoftwareDetailsInactive from "../resources/art/details page graphic header/Editing Software Details Inactive.gif"
import CodingLangFrameworkDetailsInactive from "../resources/art/details page graphic header/Tech Stack.gif"
import ResumeDetailsInactive from "../resources/art/details page graphic header/Resume Details Inactive.gif"

const Details = () => {

  useEffect(() => {
    document.title = "Marqed's Details";
  }, []);

  return (
    <div className="details-container">
      <Navbar/>
      <h1><img src={DetailsNavbarInactive} className="details-header" alt="Details" /></h1>

      <div className="details-content">

        <div className="details-left-column">
          <div className="details-layout-emails">
            <h2 className="details-emails-header">
              <img src={ContactDetailsInactive} className="contacts-header" alt="Contacts" />
            </h2>
            <p className="contacts-body">
              School Email: zachery.francis28@bcmail.cuny.edu<br/>
              Professional Email: zacherywfrancis@gmail.com<br/>
              Video Editing Email: marqers7@gmail.com
            </p>
          </div>

          <div className="details-layout-resume">
            <h2 className="details-resume-header">
              <img src={ResumeDetailsInactive} className="details-resume-img" alt="Resume" />
            </h2>
            <p className="resume-body">
              <a href="https://www.marqed.it/Resume" target="_blank" rel="noopener noreferrer">
                <u>View Resume</u>
              </a>
              <br/>
              <a href="/documents/Zache Franci ATS Rep Resume.pdf" download>
                <u>Download Resume</u>
              </a>
            </p>
          </div>
        </div>

        <div className="education-and-skills">
          <div className="details-layout-edu">
            <h2 className="details-education-header">
              <img src={EducationDetailsInactive} className="education-header" alt="Education" />
            </h2>
            <p className="education-body">
              Brooklyn College<br/>
              • B.S. in Information Systems<br/><br/>
              Kingsborough Community College<br/>
              • A.A. in Liberal Arts
            </p>
          </div>

          <div className="details-layout-coding-lang-framework">
            <h2 className="details-skills-lang-framework">
              <img src={CodingLangFrameworkDetailsInactive} className="coding-lang-framworks-header" alt="CodingLangFrameworks" />
            </h2>
            <p className="coding-lang-framworks-body">
              • Java / Oracle JDK 23/25<br/>
              • C# / Microsoft Dotnet 9.0<br/>
              • Python / Python 3.13 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
              • React / React 11.9 (HTML, JS, CSS) 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
            </p>
          </div>

          <div className="details-layout-editing-software">
            <h2 className="details-skills-edit-software">
              <img src={EditingSoftwareDetailsInactive} className="editing-software-header" alt="EditingSoftware" />
            </h2>
            <p className="editing-software-body">
              • Adobe After Effects<br/>
              • Adobe Premiere Pro<br/>
              • Adobe Media Encoder<br/>
              • Sony Vegas Pro<br/>
            </p>
          </div>
        </div>

        <div className="details-layout-int">
          <h2 className="details-interests-header">
            <img src={InterestsDetailsInactive} className="interests-header" alt="interests" />
          </h2>
          <p className="interests-body">
            I love creating video edits that radiate an elevated sense of skill and creative vision.
            The kind of effervescence that turns a great "play" into an iconic moment.
            <br/><br/>
            The thing is, for me editing & programming are an expression of self.
            It isn't conformity — so what is it? It's application, maybe indentation.
            The world I'd like to live in — the way I want to be noticed.
            It's all much, much more than just utility!
            <br/><br/>
            Technology comes naturally because it's the toolset that lets me shape ideas,
            refine my style, and show real expertise through the work I put out.
            It feels amazing to build projects, to service a purpose, or reveal new ones.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Details;