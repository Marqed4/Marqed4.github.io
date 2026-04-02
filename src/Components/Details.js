import Navbar from "./Navbar.js"
import DetailsNavbarInactive from "../Resources/art/Background Project/Gradients/Details Navbar Inactive.gif"
import ContactDetailsInactive from "../Resources/art/Background Project/Gradients/Contacts Details Inactive.gif"
import EducationDetailsInactive from "../Resources/art/Background Project/Gradients/Education Details Inactive.gif"
import InterestsDetailsInactive from "../Resources/art/Background Project/Gradients/Interests Details Inactive.gif"
import EditingSoftwareDetailsInactive from "../Resources/art/Background Project/Gradients/Editing Software Details Inactive.gif"
import CodingLangFrameworkDetailsInactive from "../Resources/art/Background Project/Gradients/Coding Languages Frameworks Details Inactive.gif"

const Details = () => {
  return (
    <div className="details-container">
      <Navbar/>
      <h1><img src={DetailsNavbarInactive} className="details-header" alt="Details" /></h1>

      <div className="details-content">
        <div className = "details-layout-emails">
              <h2 className = "details-emails-header">
                <img src={ContactDetailsInactive} className="contacts-header" alt="Contacts" />
              </h2>
              <p className="contacts-body">
              School Email: zachery.francis28@bcmail.cuny.edu<br/>
              Professional Email: zacherywfrancis@gmail.com<br/>
              Video Editing Email: marqers7@gmail.com
            </p>
          </div>

        <div className = "education-and-skills">
          <div className = "details-layout-edu">
            <h2 className = "details-education-header">
              <img src={EducationDetailsInactive} className="education-header" alt="Education" />
            </h2>
            <p className="education-body">
                Brooklyn College<br/>
                • B.S. in Information Systems<br/><br/>

                Kingsborough Community College<br/>
                • A.A. in Liberal Arts
            </p>
          </div>

          <div className = "details-layout-editing-software">
            <h2 className = "details-skills-edit-software">
              <img src={EditingSoftwareDetailsInactive} className="editing-software-header" alt="EditingSoftware" />
            </h2>
            <p className="editing-software-body">
              • Adobe After Effects<br/>
              • Adobe Premiere Pro<br/>
              • Adobe Media Encoder<br/>
              • Sony Vegas Pro<br/>
            </p>
          </div>

          <div className = "details-layout-coding-lang-framework">
            <h2 className = "details-skills-lang-framework">
                <img src={CodingLangFrameworkDetailsInactive} className="coding-lang-framworks-header" alt="CodingLangFrameworks" />
              </h2>
              <p className="coding-lang-framworks-body">
                • Java / Oracle JDK 23/25<br/>
                • C# / Microsoft Dotnet 9.0<br/>
                • Python / Python 3.13 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
                • React / React 11.9 (HTML, JS, CSS) 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
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
            The thing is, for me editing & programming is an expression of self. <br/>
            It isn't conformity, so what is it? It's application, maybe indentation. <br/>
            The world I'd like to live in; the way I want to be noticed. 
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