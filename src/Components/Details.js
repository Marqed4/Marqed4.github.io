const Details = () => {
  return (
    <div className = "details-container">
      <h1 className = "details-header">
      Details
      </h1>

      <div className = "details-education-section">

        <h1 className = "details-education-header">
        Education
        </h1>

          <div className = "details-education">
            <p className = "details-associate-education-degree">
              Kingsborough Community College <br/>
     			    • A.A. in Liberal Arts
            </p>

            <p className = "details-bachelors-education-degree">
            Brooklyn College <br/>
     			  • B.S. in Information Systems
            </p>
          </div>

        <h1 className = "details-interests-header">
        Interests
        </h1>

        <p className = "details-interests">
        I love creating video edits that radiate pure swagger. <br/>
        The kind of energy that turns simple clips into something alive. <br/>
        I pull inspiration from standout editors who bring culture and <br/>
        personality into gameplay and everyday moments. <br/> 
        For me, developing/editing is both expression and utility! <br/>
        I enjoy building projects that feel good to make and serve a purpose.
        Technology comes naturally because it’s the toolset that lets me shape ideas,
        refine my style, and show real expertise through the work I put out. <br/>
        </p>

      </div>
    </div>
  );
};

export default Details;