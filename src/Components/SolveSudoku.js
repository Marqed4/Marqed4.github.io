import { useEffect } from "react";
import Navbar from "./Navbar.js";
import "./SolveSudoku.css";

import Sudoku from "../resources/art/sudoku page graphics/Sudoku.gif";
import AppScreenshot from "../resources/art/sudoku page graphics/Screenshot_2026-06-21_092112.png";
import UMLDiagram    from "../resources/art/sudoku page graphics/Screenshot_2026-06-21_034200.png";

import Overview     from "../resources/art/Background Project/Gradients/Overview Inactive.gif";
import Features     from "../resources/art/Background Project/Gradients/Features Inactive.gif";
import Architecture from "../resources/art/Background Project/Gradients/Architecture Inactive.gif";

const sections = [
  {
    img: AppScreenshot,
    alt: "SolveSudoku board UI",
    label: "One Board, Every Tool",
    tag: "ui",
    items: [
      "Upload Puzzle Image * drag in or select a photo of any printed or digital sudoku",
      "Take Photo of Puzzle * use your device camera to capture a puzzle on the spot",
      "GET HINT * choose 1-5 hints from the dropdown; fills the easiest cells first",
      "Blue digits * your entries are visually separated from the original clues",
      "Red digits * cells conflicting with the current board state are flagged live",
      "CAN BE SOLVED? * check whether the puzzle has a valid solution before committing",
      "TEST MY SOLUTION * verify your filled board against the solved state instantly",
      "GENERATE NEW PUZZLE * creates a unique, solvable sudoku with a single solution",
      "SOLVE FOR ME * runs the backtracking solver and fills the entire board",
    ],
  },
  {
    img: UMLDiagram,
    alt: "SolveSudoku UML class diagram",
    label: "How It Is Built",
    tag: "ar",
    flip: true,
    items: [
      "App * root React component; owns board, originalBoard, clues, and hintCells state",
      "SudokuBoard * renders the 9x9 grid; receives board, clues, and hintCells as props",
      "SudokuScanner * handles image upload and passes the extracted array back to App",
      "StatusBadge * displays result1 and result2 from validation and solve checks",
      "SudokuSolutions * static Python class; validates, solves, and tests board correctness",
      "SudokuGenerator * static Python class; builds a randomized puzzle with guaranteed solution",
      "ImageToArray * static Python class; runs the OpenCV pipeline and returns a 9x9 array",
      "Hints * static Python class; returns the next best cell given the current board state",
      "Main * Flask routes entry point; delegates every request to the appropriate class",
    ],
  },
];

const SolveSudoku = () => {
  useEffect(() => {
    document.title = "Sudoku";
  }, []);

  return (
    <div className="solvesudoku-container">
      <Navbar />

      <img src={Sudoku} className="solvesudoku-title"></img>

      <p className="solvesudoku-description">Upload, generate, solve, or scan.</p>
      <p className="solvesudoku-description">
        Drop in any puzzle image, let the board populate itself,
        and play. Hints, validation, and a full solver are always one click away.
      </p>

      <div className="solvesudoku-views">
        {sections.map(({ img, alt, label, tag, flip, items }) => (
          <div
            key={tag}
            className={`solvesudoku-view-section${flip ? " solvesudoku-view-section--flip" : ""}`}
          >
            <img src={img} className="solvesudoku-screenshot" alt={alt} />
            <div className="solvesudoku-view-docs">
              <p className="solvesudoku-view-label">{label}</p>
              <ul className="solvesudoku-view-list">
                {items.map((item, i) => {
                  const [bold, ...rest] = item.split(" * ");
                  return (
                    <li key={i}>
                      <span className="solvesudoku-tag">{tag}.{i + 1}</span>
                      {rest.length ? (
                        <><strong>{bold}</strong>{": "}{rest.join(" * ")}</>
                      ) : (
                        bold
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="solvesudoku-content">
        <div className="solvesudoku-layout-overview">
          <h2 className="solvesudoku-overview-header">
            <img src={Overview} className="overview-header" alt="Overview" />
          </h2>
          <p className="overview-body">
            <strong>SolveSudoku</strong> is a full-stack sudoku tool built with{" "}
            <strong>React</strong> and <strong>Vite</strong> on the frontend, backed by a{" "}
            <strong>Flask</strong> API server.<br /><br />
            The Python backend handles solving, generation, hint logic, and image scanning.
            Each concern is isolated into its own static utility class, callable through a clean REST interface.<br /><br />
            The scanner runs an <strong>OpenCV</strong> preprocessing pipeline and digit
            classifier to convert any puzzle photo into a playable board automatically.
          </p>
        </div>

        <div className="solvesudoku-layout-features">
          <h2 className="solvesudoku-features-header">
            <img src={Features} className="features-header" alt="Features" />
          </h2>
          <p className="features-body">
            • <strong>Image scanner</strong>: upload or photograph any sudoku and get a playable board<br /><br />
            • <strong>Backtracking solver</strong>: solves any valid puzzle instantly<br /><br />
            • <strong>Puzzle generator</strong>: unique, solvable puzzles on demand<br /><br />
            • <strong>Hint engine</strong>: 1-5 targeted hints without revealing the full solution<br /><br />
            • <strong>Live validation</strong>: conflict detection and solution checking as you play<br /><br />
            • <strong>Clean board UI</strong>: clue digits, user entries, and hints are visually distinct
          </p>
        </div>

        <div className="solvesudoku-layout-architecture">
          <h2 className="solvesudoku-architecture-header">
            <img src={Architecture} className="architecture-header" alt="Architecture" />
          </h2>
          <p className="architecture-body">
            React + Vite (UI)<br />
            ↓<br /><br />
            Flask (REST API)<br />
            ↓<br /><br />
            SudokuSolutions<br />
            SudokuGenerator<br />
            ImageToArray<br />
            Hints<br />
            (Python Modules)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolveSudoku;