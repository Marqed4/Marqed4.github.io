import Navbar from "./Navbar.js"

const Details = () => {
  return (
    <div className="details-container">
      <Navbar/>
      <h1 className="details-header">Details</h1>

      <div className="details-content">
        <div className = "education-and-skills">
          <div className="details-layout-edu">
            <h2 className="details-education-header">Education</h2>
            <p>
              Brooklyn College<br/>
              • B.S. in Information Systems
            </p>
            <p>
              Kingsborough Community College<br/>
              • A.A. in Liberal Arts
            </p>
          </div>

          <div className="details-layout-skills">
            <h2 className="details-skills-header">Editing Softwares</h2>
            <p>
              • Adobe After Effects<br/>
              • Adobe Premiere Pro<br/>
              • Adobe Media Encoder<br/>
              • Sony Vegas Pro<br/>
            </p>
            <h2 className="details-skills-header">Coding Languages/ Frameworks</h2>
            <p>
              • Java / Oracle JDK 23/25<br/>
              • C# / Microsoft Dotnet 9.0<br/>
              • Python / Python 3.13 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
              • React / React 11.9 (HTML, JS, CSS) 𝙎𝙩𝙪𝙙𝙮𝙞𝙣𝙜<br/>
            </p>
          </div>
        </div>

        <div className="details-layout-int">
          <h2 className="details-interests-header">Interests</h2>
          <p>
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