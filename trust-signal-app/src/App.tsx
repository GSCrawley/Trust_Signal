import { useMemo, useState } from "react";
import "./App.css";

const scenarios = [
  {
    id: 1,
    title: "Voice note from CEO",
    channel: "Voice",
    summary: "A voice memo asks you to approve an urgent transfer before the board call.",
    clue: "The caller uses an unfamiliar accent and avoids the usual callback process.",
    correct: "Signal",
    coaching: "Verify high-risk requests via a known channel before approving any transfer.",
  },
  {
    id: 2,
    title: "Invoice update email",
    channel: "Email",
    summary: "Vendor requests a new ACH account number for next week's payment.",
    clue: "The email domain is one character off and the tone is unusually pushy.",
    correct: "Signal",
    coaching: "Check the vendor record and confirm changes with a verified contact.",
  },
  {
    id: 3,
    title: "Slack message from manager",
    channel: "Chat",
    summary: "Your manager asks for a quick confirmation of yesterday's report details.",
    clue: "The message matches the manager's normal style and references a real meeting.",
    correct: "Trust",
    coaching: "This looks consistent with normal workflow. Still document decisions.",
  },
];

type Decision = "Trust" | "Signal";

const scoreDelta = (decision: Decision, correct: Decision) => {
  if (decision === correct) {
    return 2;
  }
  if (decision === "Signal" && correct === "Trust") {
    return -1;
  }
  return -3;
};

export default function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [decision, setDecision] = useState<Decision | null>(null);
  const [history, setHistory] = useState<Array<{ id: number; decision: Decision }>>([]);
  const scenario = scenarios[step];

  const role = useMemo(() => {
    const roles = ["Employee", "Manager", "IT Support", "Executive"];
    return roles[step % roles.length];
  }, [step]);

  const handleDecision = (choice: Decision) => {
    if (decision) {
      return;
    }
    setDecision(choice);
    setHistory((current) => [...current, { id: scenario.id, decision: choice }]);
    setScore((current) => current + scoreDelta(choice, scenario.correct as Decision));
  };

  const nextScenario = () => {
    setDecision(null);
    setStep((current) => current + 1);
  };

  const restart = () => {
    setDecision(null);
    setStep(0);
    setScore(0);
    setHistory([]);
  };

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__eyebrow">Trust Signal • Session 1: Foundation</p>
          <h1>Detection Sprint</h1>
          <p className="app__subhead">
            Review each communication quickly and decide whether to trust it or signal a threat.
          </p>
        </div>
        <div className="app__stats">
          <div>
            <span className="label">Role</span>
            <strong>{role}</strong>
          </div>
          <div>
            <span className="label">Score</span>
            <strong>{score}</strong>
          </div>
        </div>
      </header>

      {step < scenarios.length ? (
        <main className="card">
          <div className="card__top">
            <div>
              <span className="pill">Scenario {scenario.id} • {scenario.channel}</span>
              <h2>{scenario.title}</h2>
            </div>
            <div className="timer">00:{String(60 - step * 10).padStart(2, "0")}</div>
          </div>
          <p className="summary">{scenario.summary}</p>
          <div className="clue">
            <h3>Clue</h3>
            <p>{scenario.clue}</p>
          </div>

          <div className="actions">
            <button
              className={`btn btn--trust ${decision === "Trust" ? "btn--selected" : ""}`}
              onClick={() => handleDecision("Trust")}
            >
              Trust
            </button>
            <button
              className={`btn btn--signal ${decision === "Signal" ? "btn--selected" : ""}`}
              onClick={() => handleDecision("Signal")}
            >
              Signal
            </button>
          </div>

          {decision && (
            <div className="feedback">
              <div>
                <p className="feedback__label">Correct call: {scenario.correct}</p>
                <p>{scenario.coaching}</p>
              </div>
              <button className="btn btn--next" onClick={nextScenario}>
                Next scenario
              </button>
            </div>
          )}
        </main>
      ) : (
        <main className="card card--summary">
          <h2>Session recap</h2>
          <p>Your team reviewed {scenarios.length} scenarios.</p>
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                Scenario {item.id}: {item.decision}
              </li>
            ))}
          </ul>
          <div className="summary__score">
            <span>Final score</span>
            <strong>{score}</strong>
          </div>
          <button className="btn btn--next" onClick={restart}>
            Run another sprint
          </button>
        </main>
      )}

      <aside className="sidebar">
        <h3>Team play tips</h3>
        <ul>
          <li>Discuss the clue together before deciding.</li>
          <li>Escalate any high-risk request to a verified channel.</li>
          <li>Rotate roles each scenario to balance perspectives.</li>
        </ul>
      </aside>
    </div>
  );
}
