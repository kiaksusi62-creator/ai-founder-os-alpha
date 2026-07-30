# ARCHITECTURE

Repository: ai-founder-os — Genesis Alpha

Zweck
------
Dieses Dokument beschreibt die Architektur‑Ziele, Projektstruktur und die wichtigsten technischen Entscheidungen für die Genesis‑Alpha‑Phase von AI Founder OS.

Ziele
-----
- Prototyp einer modularen Monorepo‑Architektur für mehrere Apps und wiederverwendbare Pakete.
- Schnelle Iteration mit Turbo (Task‑Orchestrator) und TypeScript.
- Klare Trennung von Apps (endpoints / services) und Packages (libs, UI, utils).

Monorepo‑Layout
---------------
- apps/           – Applikationen (z. B. web‑app, cli, api). Jede App hat eigene package.json.
- packages/       – Wiederverwendbare Bibliotheken (ui, core, utils, models).
- docs/           – Architektur-, Design‑ und Benutzer‑Dokumentation.
- ai-founder-os/  – projektinterne Hilfsdateien (optional) oder Beispiele.
- package.json    – Monorepo‑root mit workspaces & Turbo Konfiguration in scripts.

Technologie‑Stack
-----------------
- Node.js + TypeScript (Codequalität, Typensicherheit)
- Turbo (turborepo) für task orchestration, inkrementelle Builds
- Package Manager: npm (v7+), pnpm optional empfohlen für Performance
- CI: GitHub Actions (Workflow: build/test/ lint / release)
- Test: Jest/ vitest (je nach Paket/Use‑Case)

Build & Dev Workflow
--------------------
- Lokales Setup:
  - git clone ... && cd repo
  - npm install
  - npm run dev (läuft über turbo und startet lokale Dev‑Targets in Workspaces)

- Build:
  - npm run build — führt turbo build aus, baut abhängige Pakete inkrementell.

- Test:
  - npm run test — slate: turbo test über Workspaces; einzelne Pakete haben eigene test‑Skripte.

CI/CD
-----
- Minimaler GitHub Actions Workflow:
  - Trigger: push, pull_request
  - Schritte: checkout, cache node_modules, install, run lint, run test, run build
  - Optional: publish Packages (bei releases) oder Deploy apps (z. B. GitHub Pages / Vercel)

Package‑Design & Abhängigkeiten
-------------------------------
- Packages sind klein, fokussiert und dokumentiert in ihrem eigenen README.
- Versionsstrategie: In der Alpha‑Phase kann ein gemeinsames Versioning verwendet werden ("private": true), spätere Packages können eigenständig versioniert werden.
- Interne Abhängigkeiten referenzieren sich über workspaces (z. B. "@aifo/core").

Code‑Organisation & Konventionen
--------------------------------
- TypeScript: zentrale tsconfig.base.json im Root, Pakete erweitern per "extends".
- Linting: ESLint + Prettier in Root konfiguriert.
- Imports: Aliase/Paths über tsconfig für lesbare interne Imports.
- Tests: Jede Library/App hat eigene tests in __tests__ oder tests/.

Sicherheit & Secrets
--------------------
- Keine Secrets im Repository. Nutze GitHub Secrets für CI (API‑Keys, Tokens).
- Sensible Konfigurationen in .env.example dokumentieren.

Observability & Logging
-----------------------
- Jede App sollte ein einheitliches Logging‑Interface nutzen.
- Im Alpha reichen strukturierte JSON‑Logs; später zentrale Telemetrie (e.g. Sentry, Prometheus).

Onboarding & Contribution
-------------------------
- docs/ enthält Getting‑Started (Install, Run, Test).
- CONTRIBUTING.md beschreibt Branching, PR‑Normen, Review‑Prozess und Commit‑Message‑Konvention.

Roadmap / Weiteres
------------------
- Templates für apps/* (web, api, cli)
- Baseline UI package (packages/ui)
- CI: Caching, incremental builds optimieren
- Optional: pnpm‑migration für schnellere installs

Kontakt / Owners
----------------
- Codeowner‑Regeln in CODEOWNERS (z. B. @team‑name) für kritische Pfade

---

Dieses Dokument ist als lebendes Dokument gedacht — bitte Änderungen per PR vorschlagen.
