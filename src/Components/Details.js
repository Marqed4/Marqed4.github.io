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
            I love creating video edits that radiate high skill energy and creative vision.
            The kind of energy that turns a great clips into an iconic moment.
            <br/><br/>
            For me, developing & editing is an expression of the wold I'd like to live in. 
            It's more than just utility! 
            <br/><br/>
            It feels good to build projects that serve a purpose. 
            It's energizing to build projects that referencable.
            Technology comes naturally because it's the toolset that lets me shape ideas,
            refine my style, and show real expertise through the work I put out.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Details;