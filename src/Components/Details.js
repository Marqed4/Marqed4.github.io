import Navbar from "./Navbar.js"

const Details = () => {
  return (
    <div className="details-container">
      <Navbar/>
      <h1 className="details-header">Details</h1>

      <div className="details-content">

        <div className="details-layout">
          <h2 className="details-education-header">Education</h2>
          <p>
            Kingsborough Community College <br/>
            • A.A. in Liberal Arts
          </p>
          <p>
            Brooklyn College <br/>
            • B.S. in Information Systems
          </p>
        </div>

        <div className="details-layout">
          <h2 className="details-interests-header">Interests</h2>
          <p>
            I love creating video edits that radiate pure swagger.
            The kind of energy that turns simple clips into something alive.
            I pull inspiration from standout editors who bring culture and
            personality into gameplay and everyday moments.
            For me, developing/editing is both expression and utility!
            I enjoy building projects that feel good to make and serve a purpose.
            Technology comes naturally because it's the toolset that lets me shape ideas,
            refine my style, and show real expertise through the work I put out.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Details;