# Karan Verma — Developer Portfolio & Systems Showcase

> **Personal Portfolio & Interactive Systems Engineering Showcase**  
> Built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, and **Motion**.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## ✦ Overview

A production personal developer portfolio built with strict adherence to **editorial typography**, **tangible digital skeuomorphism**, and **sub-50ms interaction response**. Rather than relying on generic modern SaaS templates, the interface incorporates tactile, physical metaphors:

- **📂 Designer Daishu 3D Frosted Folder Fan**: Interactive, jewel-toned project dossiers with realistic z-index layering and smooth touch/hover physics.
- **🧺 Hanging Clothesline Showcase**: Suspended vector catenary curve displaying active systems on translucent clippable leaves.
- **📁 MOOV Translucent Deep-Dive Folder**: Macro-view folder dossier with peeking sub-sheets and interactive tab switching.
- **🪪 Verified Developer License Badge**: Embossed identity credential with holographic accents, security stamps, and verified competencies.
- **🌓 Chromatic Ambient Tint Engine**: Tailored section-by-section atmospheric color grading across both high-contrast Light ("Day") and deep Obsidian ("Night") themes.
- **⚡ Local-First & Zero-Slop Architecture**: Ultra-fast bundle loading, WCAG AAA color calibration, and zero runtime layout shift.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Concurrent rendering, modern hooks, declarative UI state |
| **Language** | **TypeScript 5.x** | End-to-end type safety, structured data models |
| **Bundler** | **Vite 8** | Lightning-fast HMR and optimized tree-shaken builds |
| **Styling** | **Tailwind CSS v4** | Modern CSS theme variables and zero-runtime styling |
| **Animation** | **Motion** | Fluid spring physics, layout animations, and gesture drag |
| **Iconography**| **Lucide Icons** | Crisp, scalable SVG vector iconography |

---

## 📂 Project Structure

```text
├── public/                     # Static public assets
│   ├── favicon.svg             # Monogram brand favicon
│   └── robots.txt              # Search engine directives
├── src/
│   ├── components/             # Modular React components
│   │   ├── AboutSection.tsx    # Identity, philosophy & developer credentials
│   │   ├── CaseStudyModal.tsx  # Deep-dive interactive modal dossier
│   │   ├── ContactSection.tsx  # Direct communication desk & live IST clock
│   │   ├── DeveloperLicenseBadge.tsx # Tactile verification credential badge
│   │   ├── Footer.tsx          # Editorial colophon & navigation anchors
│   │   ├── FrostedFolderFan.tsx # 3D rotating jewel-toned folder fan
│   │   ├── HangingCardsShowcase.tsx # Suspended clothesline project display
│   │   ├── Hero.tsx            # Editorial typography launchpad
│   │   ├── JourneySection.tsx  # Career flight log & verified milestones
│   │   ├── MoovFolderDeepDive.tsx # Architectural project inspector
│   │   ├── Navbar.tsx          # Apple-inspired frosted glass pill header
│   │   ├── ProjectMockup.tsx   # Interactive micro-simulators per project
│   │   ├── ProjectsSection.tsx # Multi-view project archive
│   │   ├── ResumeSection.tsx   # Curated curriculum vitae dossier
│   │   ├── SkillsSection.tsx   # Studio pinboard skill classification
│   │   └── ThemeToggle.tsx     # Tactile day/night spring switch
│   ├── data/
│   │   └── portfolioData.ts    # Centralized typed portfolio content
│   ├── types/
│   │   ├── index.ts            # Barrel exports for types
│   │   └── portfolio.ts        # TypeScript interfaces & domain models
│   ├── App.tsx                 # Root application composition & scroll spy
│   ├── index.css               # Tailwind v4 configuration & theme tokens
│   └── main.tsx                # Client application bootstrap
├── index.html                  # HTML entry point with typography preconnects
├── package.json                # Dependencies, scripts, and package metadata
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite plugins and module aliases
```

---

## 🚀 Featured Case Studies

1. **Saksham Health** — *Accessible Rural Telemedicine & Offline-First Triage Engine*  
   - Offline-first PWA backed by IndexedDB and background sync queues. Adaptive audio-first WebRTC pipeline downscaling smoothly to maintain clarity at 28kbps.
2. **Aura Design System** — *Enterprise Multi-Brand Design Token Engine & Component Matrix*  
   - Zero-runtime CSS variable engine with WCAG AAA automated contrast audit pipelines across multiple brand themes.
3. **ChronoSync DB** — *Distributed Log-Structured Merge Time-Series Storage Engine*  
   - Custom LSM-Tree implementation with bloom filters, write-ahead logging (WAL), and memory-mapped segment compaction.
4. **VocalMesh** — *Decentralized Offline Mesh Voice Relay for Crisis Zones*  
   - WebRTC DataChannel mesh network routing Opus audio packets over multi-hop topologies with zero central infrastructure.
5. **Hyperion Core** — *Ultra-Low-Latency Order Book & Trade Matching Engine*  
   - In-memory lock-free FIFO matching engine processing sub-microsecond state transitions with deterministic execution.

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krunvermaa/KARAN-VERMA-Portfolio.git
   cd KARAN-VERMA-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser to [http://localhost:3000](http://localhost:3000).

4. **Run TypeScript typecheck:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static output will be located in the `dist/` directory, ready to deploy to any static hosting provider.

---

## 🚢 Deployment

The project builds standard static HTML/CSS/JS artifacts with zero server-side requirements:

- **Vercel**: Connect the repository; framework will be detected automatically as Vite.
- **GitHub Pages**: Deploy the `dist/` output using standard GitHub Actions or gh-pages branch.
- **Cloudflare Pages / Netlify**: Build command `npm run build`, build output directory `dist`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
