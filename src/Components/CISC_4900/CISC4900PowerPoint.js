import { useEffect, useRef } from "react";
import { init } from "pptx-preview";
import Navbar from "../Navbar.js";
import "./CISC4900PowerPoint.css";

const PPTX_URL = `${process.env.PUBLIC_URL}/documents/CISC-4900_PopularVote_Thirteenth_Draft_Dark.pptx`;

const CISC4900PowerPoint = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.title = "CISC 4900 - PopularVote PowerPoint";

    const node = wrapperRef.current;
    let cancelled = false;

    const previewer = init(node, {
      width: 960,
      height: 540,
      mode: "slide",
    });

    fetch(PPTX_URL)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        if (!cancelled) previewer.preview(buffer);
      });

    return () => {
      cancelled = true;
      if (node) node.innerHTML = "";
    };
  }, []);

  return (
    <div className="cisc4900-ppt-container">
      <Navbar />

      <h1 className="cisc4900-ppt-title">CISC 4900 - PopularVote Presentation</h1>

      <a className="cisc4900-ppt-download" href={PPTX_URL} download>
        Download .pptx
      </a>

      <div className="cisc4900-ppt-viewer" ref={wrapperRef} />
    </div>
  );
};

export default CISC4900PowerPoint;
