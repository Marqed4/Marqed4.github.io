import { useEffect, useState } from "react";
import Icon from "./Icon.js";
import Navbar from "./Navbar.js";
import "./PopularVoteTimeLog.css";

// Fall 2026 semester (Brooklyn College): classes run Aug. 28 - Dec. 21, 2026.
// Logging window starts 3 days in, on Aug. 31, 2026.
const SEMESTER_START = "2026-08-28";
const SEMESTER_END = "2026-12-21";
const LOG_START = "2026-08-31";

// How to add a new entry:
// 1. Copy one of the objects below.
// 2. date is "YYYY-MM-DD". duration is hours as a number (supports .5).
// 3. category should match one of: "Supervisor discussion", "Team discussion",
//    "Design", "Coding", "Documentation", "Testing & Debugging",
//    "Research, Training, Learning", "Other"
// 4. Keep newest entries at the top of the array.
// 5. Only log days that have actually happened - don't log ahead of today.
const entries = [
  {
    date: "2026-09-14",
    duration: 3,
    category: "Coding",
    description: "Ported the backend from Node/Express to Python/Flask.",
    challenges: "Rebuilding session middleware and CORS setup without Express's request helpers.",
    reflection: "Flask's smaller footprint made the route handlers easier to reason about line by line.",
  },
  {
    date: "2026-09-12",
    duration: 1.5,
    category: "Testing & Debugging",
    description: "Verified hydrate() correctly rebuilds in-memory sessions from Supabase after a simulated restart.",
    challenges: "Had to fake a mid-flight session (OPEN phase with unanswered clusters) to actually exercise the rebuild path.",
    reflection: "Confirmed the write-through cache survives a redeploy without losing session state.",
  },
  {
    date: "2026-09-10",
    duration: 2.5,
    category: "Coding",
    description: "Implemented SessionManager's in-memory dict and the write-through pattern to Supabase.",
    challenges: "Deciding where the single source of truth lives when both memory and Postgres can be read from.",
    reflection: "Write-through kept things simple for a single-process deployment; documented the tradeoff for later.",
  },
  {
    date: "2026-09-08",
    duration: 2,
    category: "Coding",
    description: "Scaffolded the Flask app structure: routes/, managers/, database/ packages and blueprint registration.",
    challenges: "Wiring four blueprints under one /api prefix without circular imports.",
    reflection: "Stashing session_manager and socketio on the Flask app object solved the import cycle cleanly.",
  },
  {
    date: "2026-09-06",
    duration: 1.5,
    category: "Documentation",
    description: "Started BACKEND_OVERVIEW.docx, drafted the data model section covering sessions/submissions/clusters.",
    challenges: "Keeping the snake_case (DB) vs camelCase (JSON/Gemini) naming straight while writing it up.",
    reflection: "Writing the doc surfaced a few inconsistent field names worth fixing later.",
  },
  {
    date: "2026-09-04",
    duration: 1,
    category: "Supervisor discussion",
    description: "Met with course instructor to review project scope and confirm the semester deliverables.",
    challenges: "Narrowing scope so the AI clustering feature is achievable within the semester.",
    reflection: "Got confirmation that incremental clustering is a reasonable stretch goal, not a required one.",
  },
  {
    date: "2026-09-02",
    duration: 1,
    category: "Research, Training, Learning",
    description: "Read through the CISC 4900 project proposal guidelines and drafted a rough deliverables timeline.",
    challenges: "Estimating how much time the AI/clustering layer would take without having built one before.",
    reflection: "Blocked out the semester into definition, backend core, AI layer, and polish/testing phases.",
  },
  {
    date: "2026-08-31",
    duration: 1,
    category: "Design",
    description: "Reviewed the capstone rubric and sketched an initial system architecture for the PopularVote course build.",
    challenges: "Deciding how much of the existing PopularVote product to reuse vs. rebuild for the course version.",
    reflection: "Settled on reusing the product's frontend and product-proven feature set, rebuilding the backend for the course.",
  },
];

const totalHours = entries.reduce((sum, e) => sum + (Number(e.duration) || 0), 0);

const INITIAL_VISIBLE = 5;

const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const PopularVoteTimeLog = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    document.title = "Popular Vote: Time Log";
  }, []);

  const visibleEntries = entries.slice(0, visibleCount);
  const hasMore = visibleCount < entries.length;

  return (
    <div className="timelog-container">
      <Icon />
      <Navbar />

      <div className="timelog-card">
        <div className="timelog-header">
          <h1 className="timelog-title">Popular Vote: Time Log</h1>
          <p className="timelog-tagline">CISC 4900 Capstone · Zachery Francis</p>
          <p className="timelog-tagline">
            <a
              href="https://github.com/Marqed4/CISC-4900-PopularVote"
              target="_blank"
              rel="noopener noreferrer"
            >
              CISC-4900-PopularVote
            </a>
          </p>
          <p className="timelog-tagline">
            Fall 2026 semester: {formatDate(SEMESTER_START)} - {formatDate(SEMESTER_END)}
          </p>
          <p className="timelog-tagline">
            Logging window: {formatDate(LOG_START)} onward
          </p>
        </div>

        <div className="timelog-summary">
          <div className="timelog-summary-stat">
            <p className="timelog-summary-label">Sessions Logged</p>
            <p className="timelog-summary-value">{entries.length}</p>
          </div>
          <div className="timelog-summary-stat">
            <p className="timelog-summary-label">Total Hours</p>
            <p className="timelog-summary-value">{totalHours}</p>
          </div>
        </div>

        <section className="timelog-section">
          <h2 className="timelog-section-title">Sessions</h2>

          {entries.length === 0 ? (
            <p className="timelog-empty">No entries logged yet.</p>
          ) : (
            <>
              <div className="timelog-entries">
                {visibleEntries.map((entry, i) => (
                  <div className="timelog-entry" key={`${entry.date}-${i}`}>
                    <div className="timelog-entry-header">
                      <span className="timelog-entry-date">{formatDate(entry.date)}</span>
                      <span className="timelog-entry-duration">{entry.duration}h</span>
                      <span className="timelog-entry-category">{entry.category}</span>
                    </div>

                    <p className="timelog-entry-description">{entry.description}</p>

                    {entry.challenges && (
                      <p className="timelog-entry-field">
                        <span className="timelog-entry-field-label">Challenges / next steps: </span>
                        {entry.challenges}
                      </p>
                    )}

                    {entry.reflection && (
                      <p className="timelog-entry-field">
                        <span className="timelog-entry-field-label">Reflection: </span>
                        {entry.reflection}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {hasMore && (
                <button
                  type="button"
                  className="timelog-view-more"
                  onClick={() => setVisibleCount((c) => c + 5)}
                >
                  View more ({entries.length - visibleCount} left)
                </button>
              )}

              {!hasMore && entries.length > INITIAL_VISIBLE && (
                <button
                  type="button"
                  className="timelog-view-more"
                  onClick={() => setVisibleCount(INITIAL_VISIBLE)}
                >
                  Show less
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default PopularVoteTimeLog;
