# Trust Signal

Trust Signal is a corporate cybersecurity awareness game focused on rapid detection of deepfakes, social engineering, and multi-channel fraud.

## Recommended Game Format

**Format:** Facilitated, team-based rapid detection tabletop session with digital scenario delivery.

**Why this format works best (based on game dynamics + research):**
- **Team-based tabletop play** maximizes discussion and behavioral change while keeping the facilitation model intact.
- **Short, timed scenarios (30-60 seconds)** keep engagement high and mirror real-world urgency.
- **Binary trust/signal decisions** simplify scoring and reinforce the verification reflex.
- **Immediate feedback loops** accelerate learning and retention.
- **CISO-led facilitation** ensures credibility and contextual policy reinforcement.

## Recommended Build Stack

**Stack:** React + TypeScript + Vite (web app)

**Rationale:**
- Web deployment supports in-room facilitation and remote/hybrid delivery.
- React enables fast iteration on scenario views, scoring, and role rotation.
- TypeScript improves safety for scenario data and scoring logic.
- Vite provides lightweight scaffolding and fast local builds.

## Build Plan (MVP → Pilot)

### Phase 1: MVP (2–3 weeks)
1. **Scenario Engine**
   - JSON-driven scenario library for voice, email, video, and chat.
   - Timer per scenario (30–60 seconds) with visible countdown.
2. **Decision + Scoring**
   - Trust/Signal buttons with immediate feedback.
   - Scoring rules: +2 correct, -1 false positive, -3 missed threat, bonus flags.
3. **Role Rotation**
   - Rotate Employee/Manager/IT Support/Executive roles each scenario.
4. **Session Flow**
   - Session 1 flow: 5-min intro, 10-min threat context, 6 scenarios, 10-min debrief.
5. **Facilitator View**
   - Scoreboard and scenario controls for CISO-led facilitation.
6. **Reporting**
   - Export session summary with detection accuracy and behaviors.

### Phase 2: Pilot (4–6 weeks)
1. **Multi-team support** with per-team scoring.
2. **Scenario authoring tools** for industry customization.
3. **Analytics dashboards** for longitudinal tracking.
4. **Content updates** for monthly mini-sessions.

## Minimal Playable Flow (Implemented)

The repo now includes a minimal playable flow in `trust-signal-app/`:
- Three scenarios with Trust/Signal decisions
- Score tracking and immediate feedback
- Role rotation per scenario
- Session recap

## Running the App

```bash
cd trust-signal-app
npm install
npm run dev
```

## Testing

No automated tests are configured yet.
