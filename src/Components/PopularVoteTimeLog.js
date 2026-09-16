import { useEffect, useState } from "react";
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
  date: "2026-09-16",
  duration: 1,
  category: "Thinking/Deciding",
  description: "I took Prof. Chuang's advice and drafted an E2E encryption + client-side clustering plan for PopularVote to keep question/message content unreadable by the Flask server and Supabase. Phase 1: ephemeral X25519 keypairs per client (libsodium) exchanged over the existing" + 
  "join-session socket event, with the host generating a symmetric room key and distributing it sealed to each participant's pubkey; server just relays opaque blobs. Phase 2: client encrypts questions with the room key before hitting /api/chat or /api/submissions;" + 
  "Supabase stores ciphertext+nonce in the same schema. Phase 3: since Gemini can't see plaintext anymore, replace it for encrypted sessions with local clustering in the moderator's browser via @huggingface/transformers (Xenova/all-MiniLM-L6-v2, WebGPU with"  + 
  "wasm fallback), doing cosine-similarity/k-means grouping client-side and broadcasting only the questionId- clusterId mapping back through the socket. Phase 4 covers model file hosting (HF CDN by default, or self-hosted static files on Render if needed)." +
  "Phase 5 wires an `encrypted` flag into session creation (routes/sessions.py + schema) so the frontend picks crypto/clustering vs. normal Gemini path, surfaced as a toggle with a clustering-quality tradeoff note.",
  challenges: "Had to reason through where encryption should live without breaking the existing Gemini clustering path for non-encrypted sessions, and figure out that Gemini simply can't be used at all once content" +
  "is E2E encrypted, so client-side embedding/clustering has to fully replace it for that mode. Also had to work out clustering continuity given it only runs while a moderator's tab is open; settled on queuing questions and running a" +
  "catch-up pass on reconnect instead of a server-side job, since the server never has plaintext to cluster with anyway.",
  reflection: "Still undecided on three things before starting: opt-in-per-session vs. global encryption (leaning opt-in so unencrypted sessions keep full Gemini quality), TF-IDF vs. a local embedding model for clustering (embedding model is heavier" +
  "but better quality), and whether to self-host model files on Render or just rely on the HF CDN. Key realization: none of the backend schema needs to change for this; Flask and Supabase just move from storing plaintext to storing structurally identical ciphertext," +
  "which keeps the blast radius of this change smaller than expected.",
},
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
