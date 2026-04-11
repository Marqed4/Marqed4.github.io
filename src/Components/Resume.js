import { useEffect } from "react";
import Navbar from "./Navbar.js";

const Resume = () => {
  useEffect(() => {
    document.title = "Zachery Francis — Resume";
  }, []);

  return (
    <div className="resume-container">
      <Navbar />
      <div className="resume-card">

        <div className="resume-header">
          <h1 className="resume-name">Zachery Francis</h1>
          <p className="resume-tagline">Information Systems Student · Brooklyn, NY</p>
          <div className="resume-contact-row">
            <span>917-615-5474</span>
            <a href="mailto:ZacheryWFrancis@gmail.com">ZacheryWFrancis@gmail.com</a>
            <a href="https://marqed.it">marqed.it</a>
            <a href="https://github.com/Marqed4">github.com/Marqed4</a>
          </div>
        </div>

        <section className="resume-section">
          <h2 className="resume-section-title">Profile</h2>
          <p className="resume-profile">
            Information Systems student with hands-on experience in IT support, technical troubleshooting,
            and academic programming environments. Strong foundation in computing, problem-solving, and
            communication. Passionate about technology and committed to becoming a reliable, high-impact
            teammate in technical environments.
          </p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Experience</h2>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Teacher's Assistant — Computer Science</p>
              <span className="resume-job-date">Feb 2026 – Present</span>
            </div>
            <p className="resume-job-org">Brooklyn College</p>
            <ul className="resume-job-list">
              <li>Reviews and grades student programming assignments via TuringsCraft: CodeLab under Prof. David Arnow.</li>
              <li>Supports students in understanding foundational programming concepts.</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">Logistics Associate</p>
              <span className="resume-job-date">Aug 2024 – May 2025</span>
            </div>
            <p className="resume-job-org">The Kitpak</p>
            <ul className="resume-job-list">
              <li>Pulled, packed, and labeled makeup and related products for daily fulfillment.</li>
              <li>Used Windows, macOS, and Shopify to manage orders and coordinate international shipments.</li>
              <li>Organized, restocked, and maintained inventory accuracy.</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <p className="resume-job-title">IT Helpdesk Technician</p>
              <span className="resume-job-date">Aug 2022 – May 2023</span>
            </div>
            <p className="resume-job-org">Kingsborough Community College</p>
            <ul className="resume-job-list">
              <li>Supported a user base of 20,000+ students and staff.</li>
              <li>Provided technical support for Microsoft Outlook and general computing issues.</li>
              <li>Assisted with troubleshooting, account access, and software navigation.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Education</h2>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">
              B.S. in Information Systems <span className="resume-edu-minor">· Minor: Computer Science</span>
            </p>
            <p className="resume-edu-school">Brooklyn College · Aug 2023 – Present</p>
          </div>

          <div className="resume-edu-item">
            <p className="resume-edu-degree">A.A. in Liberal Arts</p>
            <p className="resume-edu-school">Kingsborough Community College · Aug 2021 – May 2023</p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skill-card">
              <p className="resume-skill-label">Video Editing</p>
              <p className="resume-skill-val">After Effects, Premiere, Media Encoder, Sony Vegas Pro · clients up to 1.4M subscribers</p>
            </div>
            <div className="resume-skill-card">
              <p className="resume-skill-label">Programming</p>
              <p className="resume-skill-val">Java, C#, Python</p>
            </div>
            <div className="resume-skill-card">
              <p className="resume-skill-label">Databases</p>
              <p className="resume-skill-val">SQL · MongoDB (learning)</p>
            </div>
            <div className="resume-skill-card">
              <p className="resume-skill-label">Tools & Other</p>
              <p className="resume-skill-val">Microsoft Excel · PC build (commercial & academic) · Shopify</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;