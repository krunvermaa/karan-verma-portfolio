import fs from 'fs';
import path from 'path';

// Helper to generate unique IDs
let idCounter = 1;
function genId(prefix = 'el') {
  return `${prefix}_${idCounter++}_${Math.random().toString(36).substr(2, 6)}`;
}

class ExcalidrawBuilder {
  constructor() {
    this.elements = [];
  }

  rect(x, y, width, height, opts = {}) {
    const el = {
      id: genId('rect'),
      type: 'rectangle',
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(width),
      height: Math.round(height),
      angle: opts.angle || 0,
      strokeColor: opts.strokeColor || '#334155',
      backgroundColor: opts.backgroundColor || 'transparent',
      fillStyle: opts.fillStyle || (opts.backgroundColor && opts.backgroundColor !== 'transparent' ? 'solid' : 'transparent'),
      strokeWidth: opts.strokeWidth ?? 1,
      strokeStyle: opts.strokeStyle || 'solid',
      roughness: opts.roughness ?? 0,
      opacity: opts.opacity ?? 100,
      groupIds: opts.groupIds || [],
      frameId: null,
      roundness: opts.roundness ? { type: 3 } : null,
      seed: Math.floor(Math.random() * 100000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
    };
    this.elements.push(el);
    return el;
  }

  ellipse(x, y, width, height, opts = {}) {
    const el = {
      id: genId('ellipse'),
      type: 'ellipse',
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(width),
      height: Math.round(height),
      angle: opts.angle || 0,
      strokeColor: opts.strokeColor || '#334155',
      backgroundColor: opts.backgroundColor || 'transparent',
      fillStyle: opts.fillStyle || (opts.backgroundColor && opts.backgroundColor !== 'transparent' ? 'solid' : 'transparent'),
      strokeWidth: opts.strokeWidth ?? 1,
      strokeStyle: opts.strokeStyle || 'solid',
      roughness: opts.roughness ?? 0,
      opacity: opts.opacity ?? 100,
      groupIds: opts.groupIds || [],
      frameId: null,
      roundness: null,
      seed: Math.floor(Math.random() * 100000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
    };
    this.elements.push(el);
    return el;
  }

  text(x, y, textStr, opts = {}) {
    const fontSize = opts.fontSize || 14;
    const fontFamily = opts.fontFamily || 2; // 1: Virgil, 2: Helvetica/Clean, 3: Monospace
    const lines = textStr.split('\n');
    const lineHeight = 1.25;
    const height = lines.length * fontSize * lineHeight;
    const approxWidth = Math.max(...lines.map(l => l.length)) * (fontSize * 0.58);

    const el = {
      id: genId('txt'),
      type: 'text',
      x: Math.round(x),
      y: Math.round(y),
      width: Math.round(opts.width || approxWidth),
      height: Math.round(height),
      angle: opts.angle || 0,
      strokeColor: opts.strokeColor || '#0f172a',
      backgroundColor: 'transparent',
      fillStyle: 'transparent',
      strokeWidth: 1,
      strokeStyle: 'solid',
      roughness: 0,
      opacity: opts.opacity ?? 100,
      groupIds: opts.groupIds || [],
      frameId: null,
      roundness: null,
      seed: Math.floor(Math.random() * 100000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
      text: textStr,
      fontSize: fontSize,
      fontFamily: fontFamily,
      textAlign: opts.textAlign || 'left',
      verticalAlign: opts.verticalAlign || 'top',
      baseline: Math.round(fontSize * 0.8),
      containerId: null,
      originalText: textStr,
      lineHeight: lineHeight
    };
    this.elements.push(el);
    return el;
  }

  line(x, y, points, opts = {}) {
    const el = {
      id: genId('line'),
      type: 'line',
      x: Math.round(x),
      y: Math.round(y),
      width: Math.abs(points[points.length - 1][0]),
      height: Math.abs(points[points.length - 1][1]),
      angle: 0,
      strokeColor: opts.strokeColor || '#64748b',
      backgroundColor: 'transparent',
      fillStyle: 'transparent',
      strokeWidth: opts.strokeWidth ?? 1,
      strokeStyle: opts.strokeStyle || 'solid',
      roughness: 0,
      opacity: opts.opacity ?? 100,
      groupIds: opts.groupIds || [],
      frameId: null,
      roundness: { type: 2 },
      seed: Math.floor(Math.random() * 100000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
      points: points
    };
    this.elements.push(el);
    return el;
  }

  arrow(x, y, points, opts = {}) {
    const el = {
      id: genId('arrow'),
      type: 'arrow',
      x: Math.round(x),
      y: Math.round(y),
      width: Math.abs(points[points.length - 1][0]),
      height: Math.abs(points[points.length - 1][1]),
      angle: 0,
      strokeColor: opts.strokeColor || '#0284c7',
      backgroundColor: 'transparent',
      fillStyle: 'transparent',
      strokeWidth: opts.strokeWidth ?? 2,
      strokeStyle: opts.strokeStyle || 'solid',
      roughness: 0,
      opacity: opts.opacity ?? 100,
      groupIds: opts.groupIds || [],
      frameId: null,
      roundness: { type: 2 },
      seed: Math.floor(Math.random() * 100000),
      version: 1,
      versionNonce: 1,
      isDeleted: false,
      boundElements: null,
      updated: Date.now(),
      link: null,
      locked: false,
      points: points,
      startBinding: null,
      endBinding: null,
      startArrowhead: null,
      endArrowhead: 'arrow'
    };
    this.elements.push(el);
    return el;
  }

  pill(x, y, width, height, textStr, opts = {}) {
    this.rect(x, y, width, height, {
      backgroundColor: opts.backgroundColor || '#f1f5f9',
      strokeColor: opts.strokeColor || '#94a3b8',
      strokeWidth: opts.strokeWidth || 1,
      roundness: true,
      ...opts
    });
    this.text(x + 10, y + (height - (opts.fontSize || 12)) / 2 - 2, textStr, {
      fontSize: opts.fontSize || 12,
      fontFamily: opts.fontFamily || 3,
      strokeColor: opts.textColor || '#334155',
      textAlign: opts.textAlign || 'left',
      width: width - 20
    });
  }

  button(x, y, width, height, textStr, opts = {}) {
    const isPrimary = opts.variant === 'primary';
    const isAccent = opts.variant === 'accent';
    const bg = isPrimary ? '#0f172a' : isAccent ? '#ea580c' : '#ffffff';
    const stroke = isPrimary ? '#0f172a' : isAccent ? '#ea580c' : '#cbd5e1';
    const textCol = isPrimary || isAccent ? '#ffffff' : '#1e293b';

    this.rect(x, y, width, height, {
      backgroundColor: bg,
      strokeColor: stroke,
      strokeWidth: 1.5,
      roundness: true,
      ...opts
    });
    this.text(x + width / 2, y + (height - (opts.fontSize || 13)) / 2 - 2, textStr, {
      fontSize: opts.fontSize || 13,
      fontFamily: 2,
      strokeColor: textCol,
      textAlign: 'center'
    });
  }

  sectionBadge(x, y, number, title) {
    this.pill(x, y, 160, 24, `// ${number} ${title.toUpperCase()}`, {
      backgroundColor: '#eff6ff',
      strokeColor: '#bfdbfe',
      textColor: '#1d4ed8',
      fontSize: 11,
      fontFamily: 3
    });
  }

  toSVG() {
    function escapeXML(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    }

    const svgParts = [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2860 6480" width="2860" height="6480" style="background:#f8fafc; font-family: system-ui, -apple-system, sans-serif;">`,
      `<defs>`,
      `  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">`,
      `    <polygon points="0 0, 10 3.5, 0 7" fill="#0284c7" />`,
      `  </marker>`,
      `  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">`,
      `    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" stroke-width="0.75" />`,
      `  </pattern>`,
      `</defs>`,
      `<rect width="100%" height="100%" fill="url(#grid)" />`
    ];

    for (const el of this.elements) {
      if (el.type === 'rectangle') {
        const rx = el.roundness ? 8 : 0;
        const transform = el.angle ? `transform="rotate(${(el.angle * 180 / Math.PI).toFixed(2)} ${el.x + el.width/2} ${el.y + el.height/2})"` : '';
        const dash = el.strokeStyle === 'dashed' ? 'stroke-dasharray="6,4"' : '';
        svgParts.push(`<rect x="${el.x}" y="${el.y}" width="${el.width}" height="${el.height}" rx="${rx}" fill="${el.backgroundColor}" stroke="${el.strokeColor}" stroke-width="${el.strokeWidth}" ${dash} ${transform} />`);
      } else if (el.type === 'ellipse') {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        const rx = el.width / 2;
        const ry = el.height / 2;
        svgParts.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${el.backgroundColor}" stroke="${el.strokeColor}" stroke-width="${el.strokeWidth}" />`);
      } else if (el.type === 'line') {
        const x1 = el.x;
        const y1 = el.y;
        const x2 = el.x + el.points[el.points.length - 1][0];
        const y2 = el.y + el.points[el.points.length - 1][1];
        const dash = el.strokeStyle === 'dashed' ? 'stroke-dasharray="6,4"' : '';
        svgParts.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${el.strokeColor}" stroke-width="${el.strokeWidth}" ${dash} />`);
      } else if (el.type === 'arrow') {
        const x1 = el.x;
        const y1 = el.y;
        const x2 = el.x + el.points[el.points.length - 1][0];
        const y2 = el.y + el.points[el.points.length - 1][1];
        svgParts.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${el.strokeColor}" stroke-width="${el.strokeWidth}" marker-end="url(#arrowhead)" />`);
      } else if (el.type === 'text') {
        const fontFam = el.fontFamily === 3 ? 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' : 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const lines = el.text.split('\n');
        const anchor = el.textAlign === 'center' ? 'middle' : el.textAlign === 'right' ? 'end' : 'start';
        const tspans = lines.map((l, i) => `<tspan x="${el.x}" dy="${i === 0 ? 0 : '1.25em'}">${escapeXML(l)}</tspan>`).join('');
        svgParts.push(`<text x="${el.x}" y="${el.y + el.baseline}" font-size="${el.fontSize}" font-family="${fontFam}" font-weight="${el.fontSize > 18 ? '700' : '400'}" fill="${el.strokeColor}" text-anchor="${anchor}">${tspans}</text>`);
      }
    }

    svgParts.push('</svg>');
    return svgParts.join('\n');
  }

  toJSON() {
    return {
      type: 'excalidraw',
      version: 2,
      source: 'https://excalidraw.com',
      elements: this.elements,
      appState: {
        gridSize: 20,
        viewBackgroundColor: '#f8fafc',
      },
      files: {}
    };
  }
}

// -------------------------------------------------------------
// MAIN WIREFRAME BUILDER SCRIPT
// -------------------------------------------------------------
const b = new ExcalidrawBuilder();

// =============================================================
// TITLE BLOCK & PROJECT METADATA HEADER
// =============================================================
b.rect(100, 30, 2660, 80, {
  backgroundColor: '#0f172a',
  strokeColor: '#1e293b',
  strokeWidth: 2,
  roundness: true
});
b.text(140, 48, 'KARAN VERMA — COMPLETE PORTFOLIO WEB APPLICATION WIREFRAME SPECIFICATION', {
  fontSize: 22,
  fontFamily: 2,
  strokeColor: '#ffffff'
});
b.text(140, 78, 'Interactive UI Blueprint & Architecture Map · React 19 + TypeScript + Vite + Tailwind · Open in Excalidraw.com', {
  fontSize: 13,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.pill(2480, 52, 240, 36, '● HOSTED & VERIFIED OK', {
  backgroundColor: '#064e3b',
  strokeColor: '#059669',
  textColor: '#34d399',
  fontSize: 12
});

// =============================================================
// 1. DESKTOP VIEWPORT (1280px x 5600px)
// =============================================================
const dX = 100;
const dY = 140;
const dW = 1280;

// Browser Chrome / Window Container
b.rect(dX, dY, dW, 5580, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  strokeWidth: 2,
  roundness: true
});

// Window Top Bar
b.rect(dX, dY, dW, 40, {
  backgroundColor: '#f1f5f9',
  strokeColor: '#cbd5e1',
  strokeWidth: 1
});
// Window Traffic Lights
b.ellipse(dX + 16, dY + 14, 12, 12, { backgroundColor: '#ef4444', strokeColor: '#dc2626' });
b.ellipse(dX + 36, dY + 14, 12, 12, { backgroundColor: '#f59e0b', strokeColor: '#d97706' });
b.ellipse(dX + 56, dY + 14, 12, 12, { backgroundColor: '#10b981', strokeColor: '#059669' });
// URL Bar
b.rect(dX + 120, dY + 7, 700, 26, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  roundness: true
});
b.text(dX + 140, dY + 12, '🔒 https://karanverma.dev / localhost:3000 — Karan Verma | Full-Stack & Systems Engineer', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#64748b'
});
// Viewport Badge
b.pill(dX + dW - 220, dY + 8, 200, 24, 'DESKTOP VIEWPORT: 1280px', {
  backgroundColor: '#e0f2fe',
  strokeColor: '#7dd3fc',
  textColor: '#0369a1',
  fontSize: 10
});

// -------------------------------------------------------------
// DESKTOP: NAVBAR (Floating Glass Pill)
// -------------------------------------------------------------
const navY = dY + 60;
b.rect(dX + 140, navY, 1000, 56, {
  backgroundColor: '#f8fafce6',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
// Brand Badge
b.pill(dX + 160, navY + 12, 150, 32, '⚡ KV // KARAN VERMA', {
  backgroundColor: '#0f172a',
  strokeColor: '#0f172a',
  textColor: '#ffffff',
  fontSize: 11
});
// Nav Items
const navItems = ['Home', 'Work', 'Deep-Dive', 'About', 'Stack', 'Journey', 'Resume', 'Contact'];
navItems.forEach((item, i) => {
  b.text(dX + 340 + i * 72, navY + 20, item, {
    fontSize: 12,
    fontFamily: 2,
    strokeColor: i === 0 ? '#0284c7' : '#475569'
  });
});
// Theme Toggle & CTA
b.pill(dX + 930, navY + 12, 70, 32, '☀️ / 🌙', {
  backgroundColor: '#f1f5f9',
  strokeColor: '#cbd5e1',
  textColor: '#334155',
  fontSize: 11
});
b.button(dX + 1010, navY + 12, 110, 32, 'Let\'s Talk →', { variant: 'primary', fontSize: 12 });

// -------------------------------------------------------------
// DESKTOP: SECTION 01 - HERO SECTION
// -------------------------------------------------------------
const heroY = navY + 90;
b.sectionBadge(dX + 60, heroY, '01', 'HERO // SYSTEM ARCHITECT');
b.text(dX + dW - 240, heroY + 4, 'COMPONENT: Hero.tsx + FrostedFolderFan.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});

// Left Column: Hero Content
b.pill(dX + 60, heroY + 40, 340, 28, '🟢 OPEN FOR FULL-STACK & SYSTEM DESIGN ROLES', {
  backgroundColor: '#ecfdf5',
  strokeColor: '#a7f3d0',
  textColor: '#047857',
  fontSize: 10
});

b.text(dX + 60, heroY + 84, 'Architecting Resilient\nWeb Systems & Industrial\nGrade Interfaces.', {
  fontSize: 38,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

b.text(dX + 60, heroY + 240, 'B.Tech in Computer Science & Engineering (8.82 CGPA, Medi-Caps University).\nWinner of MSME Idea Hackathon 3.0 (₹15 Lakh Govt Grant).\nSpecializing in high-concurrency Node/Go backends, WebSockets,\nand meticulously engineered React 19 client applications.', {
  fontSize: 14,
  fontFamily: 2,
  strokeColor: '#475569'
});

// CTA Buttons Row
b.button(dX + 60, heroY + 340, 160, 46, 'Explore Work ↓', { variant: 'primary', fontSize: 14 });
b.button(dX + 235, heroY + 340, 160, 46, 'Direct Contact →', { fontSize: 14 });
b.button(dX + 410, heroY + 340, 180, 46, 'Download Dossier [PDF]', { fontSize: 14 });

// Stat Chips Row
b.pill(dX + 60, heroY + 410, 175, 42, '8.82 CGPA\nMedi-Caps Univ', {
  backgroundColor: '#f8fafc',
  strokeColor: '#cbd5e1',
  textColor: '#0f172a',
  fontSize: 11
});
b.pill(dX + 250, heroY + 410, 175, 42, '₹15L GRANT\nMSME Hackathon 3.0', {
  backgroundColor: '#fffbeb',
  strokeColor: '#fde68a',
  textColor: '#b45309',
  fontSize: 11
});
b.pill(dX + 440, heroY + 410, 175, 42, '99.98% SLA\nReal-Time Telemetry', {
  backgroundColor: '#f0fdf4',
  strokeColor: '#bbf7d0',
  textColor: '#15803d',
  fontSize: 11
});

// Right Column: Frosted Folder Fan Graphic
b.rect(dX + 680, heroY + 30, 540, 430, {
  backgroundColor: '#f8fafc',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 700, heroY + 50, 'INTERACTIVE FROSTED FOLDER FAN (3D TILT)', {
  fontSize: 12,
  fontFamily: 3,
  strokeColor: '#0284c7'
});

// Folder 1 (-12 deg tilt)
b.rect(dX + 710, heroY + 90, 240, 320, {
  backgroundColor: '#ffffff',
  strokeColor: '#94a3b8',
  strokeWidth: 1.5,
  roundness: true,
  angle: -0.08
});
b.pill(dX + 725, heroY + 105, 120, 24, 'TAB: MOOV-01', { backgroundColor: '#f1f5f9', fontSize: 10 });
b.text(dX + 725, heroY + 145, 'MOOV Logistics\nFleet Telemetry\n42k Active Trips\n140ms p95 Latency', { fontSize: 12, fontFamily: 2 });

// Folder 2 (0 deg tilt - center)
b.rect(dX + 830, heroY + 110, 250, 330, {
  backgroundColor: '#ffffff',
  strokeColor: '#0284c7',
  strokeWidth: 2,
  roundness: true
});
b.pill(dX + 845, heroY + 125, 130, 24, 'TAB: GOVDOCS-02', { backgroundColor: '#e0f2fe', textColor: '#0369a1', fontSize: 10 });
b.text(dX + 845, heroY + 165, 'GovDocs Vault\nDecentralized Storage\nEthereum + IPFS\nSmart Contract Auth', { fontSize: 12, fontFamily: 2 });
b.pill(dX + 845, heroY + 280, 210, 28, '● Interactive Case Study', { backgroundColor: '#f0fdf4', textColor: '#166534', fontSize: 11 });

// Folder 3 (+12 deg tilt)
b.rect(dX + 950, heroY + 100, 240, 320, {
  backgroundColor: '#ffffff',
  strokeColor: '#94a3b8',
  strokeWidth: 1.5,
  roundness: true,
  angle: 0.08
});
b.pill(dX + 965, heroY + 115, 130, 24, 'TAB: SWASTHY-03', { backgroundColor: '#fef2f2', fontSize: 10 });
b.text(dX + 965, heroY + 155, 'SwaasthySetu\nRural Telemedicine\nWebRTC Audio/Video\nDistributed Sync', { fontSize: 12, fontFamily: 2 });

// Divider
b.line(dX + 60, heroY + 490, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 02 - HANGING CARDS SHOWCASE
// -------------------------------------------------------------
const hangY = heroY + 520;
b.sectionBadge(dX + 60, hangY, '02', 'FEATURED WORK // SUSPENDED CLOTHESLINE');
b.text(dX + dW - 260, hangY + 4, 'COMPONENT: HangingCardsShowcase.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, hangY + 36, 'Selected Architectural Works & Systems', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});
b.text(dX + 60, hangY + 70, 'Physical clothespin suspended steel cable with tilt physics on mouse scroll & interaction.', {
  fontSize: 13,
  fontFamily: 2,
  strokeColor: '#64748b'
});

// Overhead Steel Cable
b.line(dX + 40, hangY + 110, [[dW - 80, 0]], { strokeColor: '#475569', strokeWidth: 2.5 });
b.pill(dX + dW / 2 - 100, hangY + 98, 200, 22, 'STEEL SUSPENSION WIRE ROPE', {
  backgroundColor: '#334155',
  textColor: '#ffffff',
  fontSize: 9
});

// 4 Hanging Cards
const cardW = 265;
const cardGap = 26;
const hangingProjects = [
  {
    title: 'MOOV LOGISTICS',
    tag: 'Fleet Telemetry',
    stack: 'React 19 · Node · WebSockets',
    stats: '42K Trips · 140ms p95',
    color: '#0284c7'
  },
  {
    title: 'GOVDOCS VAULT',
    tag: 'Decentralized Docs',
    stack: 'Solidity · IPFS · Ethers.js',
    stats: '100% Immutable Verification',
    color: '#7c3aed'
  },
  {
    title: 'SWASTHYA SETU',
    tag: 'Telemedicine Hub',
    stack: 'WebRTC · Node · MongoDB',
    stats: 'Low-Bandwidth Rural Sync',
    color: '#059669'
  },
  {
    title: 'AI CODE AUDITOR',
    tag: 'AST Security Scanner',
    stack: 'Python · AST · FastAPI',
    stats: 'Sub-second Vulnerability Run',
    color: '#ea580c'
  }
];

hangingProjects.forEach((proj, idx) => {
  const cX = dX + 70 + idx * (cardW + cardGap);
  const cY = hangY + 130;

  // Clothespin Clip
  b.rect(cX + cardW / 2 - 10, hangY + 104, 20, 26, {
    backgroundColor: '#cbd5e1',
    strokeColor: '#475569',
    strokeWidth: 1.5,
    roundness: true
  });
  // Card Container
  b.rect(cX, cY, cardW, 360, {
    backgroundColor: '#ffffff',
    strokeColor: '#cbd5e1',
    strokeWidth: 1.5,
    roundness: true
  });
  // Top Color Strip
  b.rect(cX, cY, cardW, 8, {
    backgroundColor: proj.color,
    strokeColor: proj.color
  });
  // Project Header
  b.pill(cX + 16, cY + 22, 140, 22, proj.tag, {
    backgroundColor: '#f8fafc',
    strokeColor: '#e2e8f0',
    textColor: proj.color,
    fontSize: 9
  });
  b.text(cX + 16, cY + 54, proj.title, {
    fontSize: 16,
    fontFamily: 2,
    strokeColor: '#0f172a'
  });
  // Preview Wireframe Graphic inside Card
  b.rect(cX + 16, cY + 84, cardW - 32, 110, {
    backgroundColor: '#f8fafc',
    strokeColor: '#e2e8f0',
    roundness: true
  });
  b.text(cX + 24, cY + 96, `[UI Dashboard Viewport]\n${proj.stats}`, {
    fontSize: 10,
    fontFamily: 3,
    strokeColor: '#64748b'
  });
  // Tech Stack
  b.text(cX + 16, cY + 210, `TECH STACK:\n${proj.stack}`, {
    fontSize: 11,
    fontFamily: 3,
    strokeColor: '#334155'
  });
  // Action Buttons
  b.button(cX + 16, cY + 265, cardW - 32, 34, 'View Full Case Study →', {
    variant: 'primary',
    fontSize: 11
  });
  b.button(cX + 16, cY + 310, (cardW - 38) / 2, 28, 'Live App ↗', { fontSize: 10 });
  b.button(cX + 16 + (cardW - 38) / 2 + 6, cY + 310, (cardW - 38) / 2, 28, 'GitHub ↗', { fontSize: 10 });
});

// Divider
b.line(dX + 60, hangY + 530, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 03 - MOOV FOLDER DEEP DIVE
// -------------------------------------------------------------
const moovY = hangY + 560;
b.sectionBadge(dX + 60, moovY, '03', 'DEEP DIVE // PRJ-01 SPECIFICATION');
b.text(dX + dW - 250, moovY + 4, 'COMPONENT: MoovFolderDeepDive.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, moovY + 36, 'MOOV: High-Throughput Vehicle Dispatch Engine', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

// Manila Folder Tab
b.rect(dX + 80, moovY + 80, 360, 36, {
  backgroundColor: '#fef3c7',
  strokeColor: '#f59e0b',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 100, moovY + 92, '📁 DOSSIER // PRJ-01: HIGH CONCURRENCY LOGISTICS', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#92400e'
});

// Large Dossier Folder Body
b.rect(dX + 80, moovY + 114, dW - 160, 480, {
  backgroundColor: '#fffbeb',
  strokeColor: '#f59e0b',
  strokeWidth: 2,
  roundness: true
});

// Left Column: Telemetry & Live Stats
b.rect(dX + 110, moovY + 140, 520, 420, {
  backgroundColor: '#ffffff',
  strokeColor: '#e2e8f0',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 130, moovY + 160, 'LIVE ARCHITECTURAL TELEMETRY STREAM', {
  fontSize: 13,
  fontFamily: 3,
  strokeColor: '#0284c7'
});

// Telemetry Metric Grid (2x2)
const tGrid = [
  { val: '99.98%', label: 'PRODUCTION SLA', desc: 'Fault-tolerant multi-zone failover' },
  { val: '140ms', label: 'p95 DISPATCH LATENCY', desc: 'Real-time WebSocket event pump' },
  { val: '42,850', label: 'CONCURRENT TRIPS', desc: 'In-memory Redis spatial indexing' },
  { val: '12.4k', label: 'TELEMETRY REQ / SEC', desc: 'Distributed ingestion cluster' }
];

tGrid.forEach((item, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const tX = dX + 130 + col * 240;
  const tY = moovY + 195 + row * 95;

  b.rect(tX, tY, 230, 80, {
    backgroundColor: '#f8fafc',
    strokeColor: '#cbd5e1',
    roundness: true
  });
  b.text(tX + 14, tY + 12, item.val, { fontSize: 20, fontFamily: 2, strokeColor: '#0f172a' });
  b.text(tX + 14, tY + 38, item.label, { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });
  b.text(tX + 14, tY + 54, item.desc, { fontSize: 9, fontFamily: 2, strokeColor: '#64748b' });
});

b.button(dX + 130, moovY + 410, 480, 40, 'Open Comprehensive Architecture Case Study (Modal) →', {
  variant: 'primary',
  fontSize: 13
});

// Right Column: Architectural Blueprint Sheets Peeking Out
b.rect(dX + 660, moovY + 140, 500, 420, {
  backgroundColor: '#0f172a',
  strokeColor: '#1e293b',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 685, moovY + 160, 'SYSTEM TOPOLOGY // DISTRIBUTED EVENT PIPELINE', {
  fontSize: 12,
  fontFamily: 3,
  strokeColor: '#38bdf8'
});

// Architecture Layers
const archLayers = [
  { num: '01', title: 'CLIENT LAYER', detail: 'React 19 + TypeScript + Leaflet GeoJSON Maps (Sub-100ms TTI)' },
  { num: '02', title: 'GATEWAY LAYER', detail: 'Express.js + WebSockets Cluster + Rate Limiter & JWT Auth' },
  { num: '03', title: 'STREAM & CACHE', detail: 'Redis Pub/Sub + Geospatial Indexing for Vehicle Fleet' },
  { num: '04', title: 'PERSISTENCE', detail: 'PostgreSQL Spatial + Partitioned Trip Event Timeseries' }
];

archLayers.forEach((layer, idx) => {
  const lY = moovY + 195 + idx * 56;
  b.rect(dX + 685, lY, 450, 46, {
    backgroundColor: '#1e293b',
    strokeColor: '#334155',
    roundness: true
  });
  b.pill(dX + 695, lY + 10, 36, 26, layer.num, {
    backgroundColor: '#0369a1',
    strokeColor: '#0284c7',
    textColor: '#ffffff',
    fontSize: 10
  });
  b.text(dX + 740, lY + 10, layer.title, { fontSize: 11, fontFamily: 3, strokeColor: '#e2e8f0' });
  b.text(dX + 740, lY + 26, layer.detail, { fontSize: 10, fontFamily: 2, strokeColor: '#94a3b8' });
});

// Credentials in Dossier
b.pill(dX + 685, moovY + 435, 450, 32, 'TEAM: Sneha Patidar, Sneha Sharma, Sourav Chaudhary, Karan Verma', {
  backgroundColor: '#1e293b',
  strokeColor: '#475569',
  textColor: '#cbd5e1',
  fontSize: 10
});

// Divider
b.line(dX + 60, moovY + 630, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 04 - ABOUT & PHILOSOPHY
// -------------------------------------------------------------
const aboutY = moovY + 660;
b.sectionBadge(dX + 60, aboutY, '04', 'ENGINEERING ETHOS // DEVELOPER LICENSE');
b.text(dX + dW - 250, aboutY + 4, 'COMPONENT: AboutSection.tsx + Badge', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, aboutY + 36, 'Principles, Pedigree & Operating Philosophy', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

// Left Column: Official Developer License Badge (Card size 380x440)
b.rect(dX + 80, aboutY + 84, 380, 440, {
  backgroundColor: '#f8fafc',
  strokeColor: '#0f172a',
  strokeWidth: 2,
  roundness: true
});
// Badge Top Header
b.rect(dX + 80, aboutY + 84, 380, 40, {
  backgroundColor: '#0f172a',
  strokeColor: '#0f172a'
});
b.text(dX + 96, aboutY + 98, 'REPUBLIC OF CODE // DEVELOPER LICENSE', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#ffffff'
});

// Photo Frame
b.rect(dX + 104, aboutY + 140, 110, 130, {
  backgroundColor: '#e2e8f0',
  strokeColor: '#94a3b8',
  roundness: true
});
b.text(dX + 120, aboutY + 195, '[PHOTO]\nKARAN\nVERMA', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#475569',
  textAlign: 'center'
});

// License Metadata
b.text(dX + 228, aboutY + 140, 'LICENSE NO:\nKV-2026-ENG-882\n\nDEGREE:\nB.Tech Computer Science\n\nCGPA:\n8.82 / 10.00\n\nINSTITUTION:\nMedi-Caps University', {
  fontSize: 10,
  fontFamily: 3,
  strokeColor: '#1e293b'
});

// Hologram Seal & Security Microprint
b.ellipse(dX + 104, aboutY + 290, 80, 80, {
  backgroundColor: '#fef3c7',
  strokeColor: '#f59e0b',
  strokeWidth: 1.5
});
b.text(dX + 120, aboutY + 320, '★ VERIFIED ★\nMSME 3.0', {
  fontSize: 9,
  fontFamily: 3,
  strokeColor: '#b45309',
  textAlign: 'center'
});

// QR Code Box
b.rect(dX + 300, aboutY + 290, 80, 80, {
  backgroundColor: '#ffffff',
  strokeColor: '#0f172a',
  strokeWidth: 1.5
});
b.text(dX + 312, aboutY + 322, '[QR CODE\nVERIFY]', {
  fontSize: 9,
  fontFamily: 3,
  strokeColor: '#0f172a',
  textAlign: 'center'
});

b.line(dX + 96, aboutY + 395, [[348, 0]], { strokeColor: '#cbd5e1' });
b.text(dX + 96, aboutY + 406, 'STATUS: PERMITTED FOR MISSION-CRITICAL DEPLOYMENTS', {
  fontSize: 9,
  fontFamily: 3,
  strokeColor: '#047857'
});

// Right Column: 4 Core Engineering Pillars
const pillars = [
  {
    num: '01',
    title: 'SYSTEM RELIABILITY FIRST',
    desc: 'Engineering failure modes upfront. Every service features circuit breakers, retries, idempotent mutations, and strict SLA monitoring.'
  },
  {
    num: '02',
    title: 'HIGH-PERFORMANCE FRONTENDS',
    desc: 'Sub-100ms TTI, 60fps interaction budgets, zero-layout shifts, tree-shaken bundles, and declarative state orchestration.'
  },
  {
    num: '03',
    title: 'DISTRIBUTED ARCHITECTURE',
    desc: 'Decoupled services communicating over structured events (WebSockets, gRPC, Redis streams) with spatial and time-series clustering.'
  },
  {
    num: '04',
    title: 'HUMAN-CENTERED DX',
    desc: 'Strict end-to-end typing, automated CI/CD pipelines, reproducible containers, and self-documenting codebases.'
  }
];

pillars.forEach((p, idx) => {
  const pY = aboutY + 84 + idx * 86;
  b.rect(dX + 490, pY, dW - 570, 74, {
    backgroundColor: '#ffffff',
    strokeColor: '#e2e8f0',
    strokeWidth: 1.5,
    roundness: true
  });
  b.pill(dX + 506, pY + 14, 40, 26, p.num, {
    backgroundColor: '#eff6ff',
    strokeColor: '#bfdbfe',
    textColor: '#1d4ed8',
    fontSize: 11
  });
  b.text(dX + 556, pY + 14, p.title, { fontSize: 13, fontFamily: 2, strokeColor: '#0f172a' });
  b.text(dX + 556, pY + 36, p.desc, { fontSize: 11, fontFamily: 2, strokeColor: '#64748b', width: dW - 650 });
});

// Award Card below pillars
b.rect(dX + 490, aboutY + 440, dW - 570, 84, {
  backgroundColor: '#fffbeb',
  strokeColor: '#fde68a',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 510, aboutY + 456, '🏆 NATIONAL AWARD: MSME IDEA HACKATHON 3.0 WINNER (GOVT OF INDIA)', {
  fontSize: 13,
  fontFamily: 2,
  strokeColor: '#92400e'
});
b.text(dX + 510, aboutY + 482, 'Awarded ₹15 Lakh Grant by the Ministry of MSME for groundbreaking technology innovation.\nLead developer responsible for distributed engineering, verification, and end-to-end delivery.', {
  fontSize: 11,
  fontFamily: 2,
  strokeColor: '#b45309'
});

// Divider
b.line(dX + 60, aboutY + 560, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 05 - TECHNICAL STACK MATRIX
// -------------------------------------------------------------
const stackY = aboutY + 590;
b.sectionBadge(dX + 60, stackY, '05', 'TECHNICAL ARSENAL // STUDIO PINBOARD');
b.text(dX + dW - 250, stackY + 4, 'COMPONENT: SkillsSection.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, stackY + 36, 'Full-Spectrum Technical Stack & Mastery Matrix', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

// Corkboard Pinboard Container
b.rect(dX + 80, stackY + 80, dW - 160, 460, {
  backgroundColor: '#fafaf9',
  strokeColor: '#d6d3d1',
  strokeWidth: 2,
  roundness: true
});
// 4 Corkboard Pushpins at corners
b.ellipse(dX + 94, stackY + 94, 16, 16, { backgroundColor: '#ef4444', strokeColor: '#991b1b' });
b.ellipse(dX + dW - 110, stackY + 94, 16, 16, { backgroundColor: '#ef4444', strokeColor: '#991b1b' });
b.ellipse(dX + 94, stackY + 510, 16, 16, { backgroundColor: '#ef4444', strokeColor: '#991b1b' });
b.ellipse(dX + dW - 110, stackY + 510, 16, 16, { backgroundColor: '#ef4444', strokeColor: '#991b1b' });

// 4 Category Cards (2x2 Grid)
const skillCats = [
  {
    title: 'FRONTEND ENGINEERING',
    icon: '⚡',
    color: '#0284c7',
    skills: ['React 19 (Hooks, Concurrent)', 'TypeScript 5.x', 'Next.js App Router', 'Tailwind CSS v3/v4', 'Redux Toolkit & Zustand', 'Framer Motion & Canvas']
  },
  {
    title: 'BACKEND & SYSTEMS',
    icon: '⚙️',
    color: '#7c3aed',
    skills: ['Node.js & Express', 'Go (Golang Systems)', 'Python & FastAPI', 'WebSockets / Socket.io', 'REST & GraphQL APIs', 'gRPC & Microservices']
  },
  {
    title: 'DATABASES & CACHING',
    icon: '🗄️',
    color: '#059669',
    skills: ['PostgreSQL & PostGIS', 'MongoDB & Aggregations', 'Redis Caching & Pub/Sub', 'Prisma ORM & Mongoose', 'Database Indexing & Tuning', 'ACID Transactions']
  },
  {
    title: 'DEVOPS, CLOUD & TOOLS',
    icon: '🚀',
    color: '#ea580c',
    skills: ['Docker & Containerization', 'Git & GitHub Workflows', 'CI/CD Automation Pipelines', 'AWS (S3, EC2, CloudFront)', 'Linux Server Administration', 'Vite & Webpack Tooling']
  }
];

skillCats.forEach((cat, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const sX = dX + 110 + col * 550;
  const sY = stackY + 110 + row * 205;

  // Sticky Card
  b.rect(sX, sY, 520, 185, {
    backgroundColor: '#ffffff',
    strokeColor: '#e2e8f0',
    strokeWidth: 1.5,
    roundness: true
  });
  // Category Top Banner
  b.rect(sX, sY, 520, 36, {
    backgroundColor: '#f8fafc',
    strokeColor: '#e2e8f0'
  });
  b.text(sX + 16, sY + 10, `${cat.icon} ${cat.title}`, {
    fontSize: 12,
    fontFamily: 3,
    strokeColor: cat.color
  });
  // Skills Pills inside Category
  cat.skills.forEach((sk, sIdx) => {
    const sRow = Math.floor(sIdx / 2);
    const sCol = sIdx % 2;
    const pX = sX + 16 + sCol * 245;
    const pY = sY + 50 + sRow * 40;

    b.pill(pX, pY, 235, 30, `✓ ${sk}`, {
      backgroundColor: '#f8fafc',
      strokeColor: '#cbd5e1',
      textColor: '#1e293b',
      fontSize: 10
    });
  });
});

// Divider
b.line(dX + 60, stackY + 570, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 06 - FLIGHT LOG & JOURNEY
// -------------------------------------------------------------
const jourY = stackY + 600;
b.sectionBadge(dX + 60, jourY, '06', 'FLIGHT LOG // CHRONOLOGICAL PASSES');
b.text(dX + dW - 250, jourY + 4, 'COMPONENT: JourneySection.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, jourY + 36, 'Milestones, Expeditions & Career Evolution', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});
b.text(dX + 60, jourY + 70, 'Fanning timeline passes with interactive drawer tabs & details.', {
  fontSize: 13,
  fontFamily: 2,
  strokeColor: '#64748b'
});

// 8 Fanning Timeline Milestones (Desktop: 4 columns x 2 rows)
const milestones = [
  { year: '2024', title: 'MSME Idea Hackathon 3.0', badge: 'WINNER ₹15L GRANT', desc: 'Govt of India National recognition for high-impact innovation.' },
  { year: '2024', title: 'B.Tech CSE Graduation', badge: '8.82 CGPA', desc: 'Medi-Caps University degree with academic honors.' },
  { year: '2024', title: 'MOOV Logistics Engine', badge: 'LEAD ARCHITECT', desc: 'Real-time vehicle telemetry pipeline handling 42k trips.' },
  { year: '2023', title: 'GovDocs Blockchain', badge: 'DECENTRALIZED', desc: 'Immutable document verification system on Ethereum & IPFS.' },
  { year: '2023', title: 'SwaasthySetu Platform', badge: 'HEALTHCARE DX', desc: 'Low-latency rural telemedicine platform over WebRTC.' },
  { year: '2023', title: 'Technical Leadership', badge: 'CORE LEAD', desc: 'Led engineering workshops, hackathon teams, and open source.' },
  { year: '2022', title: 'Full-Stack Mastery', badge: 'SYSTEMS FOCUS', desc: 'Deep-dive into distributed systems, Go, and high-concurrency Node.' },
  { year: '2026', title: 'Present & Beyond', badge: 'SYSTEMS ENG', desc: 'Designing production-grade fault-tolerant distributed web apps.' }
];

milestones.forEach((m, idx) => {
  const row = Math.floor(idx / 4);
  const col = idx % 4;
  const mX = dX + 80 + col * 285;
  const mY = jourY + 110 + row * 190;

  b.rect(mX, mY, 265, 170, {
    backgroundColor: '#ffffff',
    strokeColor: '#cbd5e1',
    strokeWidth: 1.5,
    roundness: true
  });
  // Top Year Pill
  b.pill(mX + 14, mY + 14, 70, 24, m.year, {
    backgroundColor: '#0f172a',
    strokeColor: '#0f172a',
    textColor: '#ffffff',
    fontSize: 11
  });
  b.pill(mX + 90, mY + 14, 160, 24, m.badge, {
    backgroundColor: '#eff6ff',
    strokeColor: '#bfdbfe',
    textColor: '#1d4ed8',
    fontSize: 9
  });
  b.text(mX + 14, mY + 52, m.title, {
    fontSize: 13,
    fontFamily: 2,
    strokeColor: '#0f172a'
  });
  b.text(mX + 14, mY + 80, m.desc, {
    fontSize: 11,
    fontFamily: 2,
    strokeColor: '#64748b',
    width: 235
  });
  b.line(mX + 14, mY + 130, [[235, 0]], { strokeColor: '#f1f5f9' });
  b.text(mX + 14, mY + 140, '● Verified Academic / Hackathon Record', {
    fontSize: 9,
    fontFamily: 3,
    strokeColor: '#059669'
  });
});

// Divider
b.line(dX + 60, jourY + 520, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 07 - RESUME DOSSIER
// -------------------------------------------------------------
const resY = jourY + 550;
b.sectionBadge(dX + 60, resY, '07', 'RESUME DOSSIER // PHYSICAL BINDER');
b.text(dX + dW - 250, resY + 4, 'COMPONENT: ResumeSection.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, resY + 36, 'Archival Dossier, Academic Transcripts & Specimen', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

// Physical Folder Container
b.rect(dX + 80, resY + 80, dW - 160, 480, {
  backgroundColor: '#f8fafc',
  strokeColor: '#64748b',
  strokeWidth: 2,
  roundness: true
});
// Brass Eyelets & Binder Clips at left
b.ellipse(dX + 95, resY + 130, 18, 18, { backgroundColor: '#d97706', strokeColor: '#78350f' });
b.ellipse(dX + 95, resY + 280, 18, 18, { backgroundColor: '#d97706', strokeColor: '#78350f' });
b.ellipse(dX + 95, resY + 430, 18, 18, { backgroundColor: '#d97706', strokeColor: '#78350f' });

// Top Row: Identity Pass & Pop Art Sticker
b.rect(dX + 140, resY + 110, 450, 150, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
b.pill(dX + 160, resY + 126, 120, 24, 'IDENTITY PASS', { backgroundColor: '#0f172a', textColor: '#ffffff', fontSize: 10 });
b.text(dX + 160, resY + 160, 'KARAN VERMA — FULL-STACK ENGINEER\nSpecialization: High-Concurrency Web Services & UI Systems\nEducation: B.Tech Computer Science & Engineering (8.82 CGPA)\nClearance: Verified for Enterprise & Venture Deployments', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#1e293b'
});

// Pop Art Sticker
b.rect(dX + 620, resY + 110, 480, 150, {
  backgroundColor: '#fef08a',
  strokeColor: '#000000',
  strokeWidth: 2.5,
  roundness: true,
  angle: -0.02
});
b.text(dX + 640, resY + 130, '★ STRICTLY SYSTEM ARCHITECTURE ★\n\nNO OVERENGINEERED BLOAT · ZERO LAYOUT SHIFTS\nSUB-100MS TTI · TYPE INTEGRITY END-TO-END', {
  fontSize: 13,
  fontFamily: 3,
  strokeColor: '#000000'
});

// Middle: Perforated Sheet Preview
b.rect(dX + 140, resY + 280, 960, 180, {
  backgroundColor: '#ffffff',
  strokeColor: '#94a3b8',
  strokeWidth: 1.5,
  strokeStyle: 'dashed',
  roundness: true
});
b.pill(dX + 160, resY + 296, 200, 24, '✂ PERFORATED EXPERIENCE RECORD', { backgroundColor: '#f1f5f9', fontSize: 10 });

b.text(dX + 160, resY + 330, 'EXPERIENCE & EDUCATION HIGHLIGHTS:\n• B.Tech Computer Science (Medi-Caps Univ, 8.82 CGPA, 2020-2024)\n• Ministry of MSME Idea Hackathon 3.0 Winner (₹15 Lakh Grant, 2024)\n• Full-Stack Architect: MOOV Logistics, GovDocs Vault, SwaasthySetu Telemedicine\n• Skills: React 19, TypeScript, Next.js, Node.js, Express, Go, Python, PostgreSQL, Redis, Docker, AWS', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#334155'
});

// Download PDF Action Button
b.button(dX + 140, resY + 480, 460, 48, 'Download Karan Verma Resume (Official PDF 📄)', {
  variant: 'primary',
  fontSize: 13
});
b.pill(dX + 620, resY + 488, 300, 32, 'MD5 VERIFIED: 100% ATS COMPLIANT FORMAT', {
  backgroundColor: '#ecfdf5',
  textColor: '#047857',
  strokeColor: '#a7f3d0',
  fontSize: 10
});

// Divider
b.line(dX + 60, resY + 590, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 08 - COLLABORATION & CONTACT DESK
// -------------------------------------------------------------
const conY = resY + 620;
b.sectionBadge(dX + 60, conY, '08', 'COLLABORATION // STATIONERY DESK');
b.text(dX + dW - 250, conY + 4, 'COMPONENT: ContactSection.tsx', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.text(dX + 60, conY + 36, 'Initiate Communication & Project Dispatch', {
  fontSize: 26,
  fontFamily: 2,
  strokeColor: '#0f172a'
});

// Left Column: Live World Clock & Direct Channels
b.rect(dX + 80, conY + 84, 520, 420, {
  backgroundColor: '#f8fafc',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
// Live World Clock Card
b.rect(dX + 104, conY + 108, 470, 90, {
  backgroundColor: '#0f172a',
  strokeColor: '#0f172a',
  roundness: true
});
b.text(dX + 124, conY + 124, 'LOCAL STATION CLOCK // INDORE, INDIA (IST)', {
  fontSize: 10,
  fontFamily: 3,
  strokeColor: '#38bdf8'
});
b.text(dX + 124, conY + 144, '09:41:22 AM IST  [UTC +5:30]', {
  fontSize: 22,
  fontFamily: 3,
  strokeColor: '#ffffff'
});
b.pill(dX + 420, conY + 128, 130, 24, '● BUSINESS HOURS', {
  backgroundColor: '#064e3b',
  textColor: '#34d399',
  fontSize: 9
});

// Direct Channels
b.text(dX + 104, conY + 220, 'DIRECT DISPATCH CHANNELS:', { fontSize: 12, fontFamily: 3, strokeColor: '#0f172a' });
const channels = [
  { name: 'Email', val: 'karanverma.dev@gmail.com' },
  { name: 'Telegram', val: '@karanverma' },
  { name: 'LinkedIn', val: 'linkedin.com/in/karanverma' },
  { name: 'GitHub', val: 'github.com/karanverma' },
  { name: 'Location', val: 'Indore, Madhya Pradesh, India (Open to Remote & Relocation)' }
];
channels.forEach((ch, idx) => {
  b.pill(dX + 104, conY + 250 + idx * 46, 470, 36, `${ch.name}: ${ch.val}`, {
    backgroundColor: '#ffffff',
    strokeColor: '#e2e8f0',
    textColor: '#334155',
    fontSize: 11
  });
});

// Right Column: Postal Mail Form
b.rect(dX + 630, conY + 84, 570, 420, {
  backgroundColor: '#fffdf5',
  strokeColor: '#fde68a',
  strokeWidth: 2,
  roundness: true
});
// Postage Stamp & Air Mail Strip
b.rect(dX + 1100, conY + 104, 80, 95, {
  backgroundColor: '#ffffff',
  strokeColor: '#dc2626',
  strokeWidth: 1.5,
  strokeStyle: 'dashed'
});
b.text(dX + 1110, conY + 130, 'AIR MAIL\nINDIA\nPOST', {
  fontSize: 10,
  fontFamily: 3,
  strokeColor: '#dc2626',
  textAlign: 'center'
});
b.text(dX + 655, conY + 108, 'POSTAL DISPATCH TRANSMITTER', {
  fontSize: 14,
  fontFamily: 3,
  strokeColor: '#78350f'
});

// Form Input Wireframe Fields
b.rect(dX + 655, conY + 140, 420, 36, { backgroundColor: '#ffffff', strokeColor: '#d6d3d1', roundness: true });
b.text(dX + 670, conY + 150, 'Sender Name: [Enter your full name]', { fontSize: 11, fontFamily: 2, strokeColor: '#94a3b8' });

b.rect(dX + 655, conY + 188, 420, 36, { backgroundColor: '#ffffff', strokeColor: '#d6d3d1', roundness: true });
b.text(dX + 670, conY + 198, 'Return Email: [your.email@domain.com]', { fontSize: 11, fontFamily: 2, strokeColor: '#94a3b8' });

b.rect(dX + 655, conY + 236, 520, 110, { backgroundColor: '#ffffff', strokeColor: '#d6d3d1', roundness: true });
b.text(dX + 670, conY + 248, 'Project Specification / Message:\n[Briefly describe your objectives, architecture requirements, or timeline...]', {
  fontSize: 11,
  fontFamily: 2,
  strokeColor: '#94a3b8'
});

// Wax Seal & Send Button
b.button(dX + 655, conY + 365, 380, 48, 'Seal & Dispatch Message [✉️ TRANSMIT]', {
  variant: 'primary',
  fontSize: 13
});
b.ellipse(dX + 1070, conY + 365, 52, 52, {
  backgroundColor: '#b91c1c',
  strokeColor: '#7f1d1d',
  strokeWidth: 2
});
b.text(dX + 1082, conY + 382, 'KV\nSEAL', {
  fontSize: 10,
  fontFamily: 3,
  strokeColor: '#ffffff',
  textAlign: 'center'
});

// Divider
b.line(dX + 60, conY + 530, [[dW - 120, 0]], { strokeColor: '#e2e8f0', strokeWidth: 1 });

// -------------------------------------------------------------
// DESKTOP: SECTION 09 - FOOTER
// -------------------------------------------------------------
const footY = conY + 560;
b.rect(dX + 60, footY, dW - 120, 100, {
  backgroundColor: '#0f172a',
  strokeColor: '#1e293b',
  strokeWidth: 1.5,
  roundness: true
});
b.text(dX + 84, footY + 24, 'kv@portfolio ~ % status: 200 OK | SLA: 99.98% | latency: 12ms', {
  fontSize: 12,
  fontFamily: 3,
  strokeColor: '#38bdf8'
});
b.text(dX + 84, footY + 50, 'Built with React 19, TypeScript, Vite, Tailwind CSS · Designed & Engineered by Karan Verma © 2026', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});
b.button(dX + dW - 250, footY + 30, 150, 40, 'Return to Top ↑', {
  variant: 'primary',
  backgroundColor: '#1e293b',
  strokeColor: '#334155',
  fontSize: 12
});


// =============================================================
// 2. MOBILE VIEWPORT (390px x 6800px)
// =============================================================
const mX = 1440;
const mY = 140;
const mW = 390;

// Mobile Device Window Frame
b.rect(mX, mY, mW, 5580, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  strokeWidth: 2,
  roundness: true
});
// Mobile Top Status Bar
b.rect(mX, mY, mW, 36, {
  backgroundColor: '#0f172a',
  strokeColor: '#0f172a'
});
b.text(mX + 18, mY + 11, '9:41', { fontSize: 11, fontFamily: 3, strokeColor: '#ffffff' });
// Camera Pill
b.rect(mX + mW / 2 - 40, mY + 8, 80, 18, {
  backgroundColor: '#1e293b',
  strokeColor: '#334155',
  roundness: true
});
b.text(mX + mW - 70, mY + 11, '5G  100%', { fontSize: 10, fontFamily: 3, strokeColor: '#ffffff' });

// Mobile Viewport Title Label
b.pill(mX + 16, mY + 48, mW - 32, 28, 'MOBILE VIEWPORT: 390px (RESPONSIVE STACK)', {
  backgroundColor: '#e0f2fe',
  strokeColor: '#7dd3fc',
  textColor: '#0369a1',
  fontSize: 10
});

// Mobile Navbar
const mNavY = mY + 86;
b.rect(mX + 16, mNavY, mW - 32, 50, {
  backgroundColor: '#f8fafc',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
b.pill(mX + 26, mNavY + 10, 120, 30, '⚡ KV VERMA', {
  backgroundColor: '#0f172a',
  textColor: '#ffffff',
  fontSize: 11
});
b.pill(mX + mW - 120, mNavY + 10, 42, 30, '🌙', {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  textColor: '#0f172a',
  fontSize: 12
});
b.button(mX + mW - 70, mNavY + 10, 44, 30, '☰', {
  variant: 'primary',
  fontSize: 14
});

// Mobile Hero Section
const mHeroY = mNavY + 68;
b.pill(mX + 16, mHeroY, mW - 32, 24, '🟢 OPEN FOR ROLES', {
  backgroundColor: '#ecfdf5',
  strokeColor: '#a7f3d0',
  textColor: '#047857',
  fontSize: 9
});
b.text(mX + 16, mHeroY + 36, 'Architecting Resilient\nWeb Systems &\nIndustrial Interfaces.', {
  fontSize: 22,
  fontFamily: 2,
  strokeColor: '#0f172a'
});
b.text(mX + 16, mHeroY + 125, 'B.Tech CSE (8.82 CGPA, Medi-Caps Univ).\nMSME Hackathon 3.0 Winner (₹15L Grant).\nDistributed systems & React 19 apps.', {
  fontSize: 11,
  fontFamily: 2,
  strokeColor: '#64748b'
});
// Mobile CTA stack
b.button(mX + 16, mHeroY + 195, mW - 32, 38, 'Explore Work ↓', { variant: 'primary', fontSize: 12 });
b.button(mX + 16, mHeroY + 240, mW - 32, 38, 'Direct Contact →', { fontSize: 12 });
b.button(mX + 16, mHeroY + 285, mW - 32, 38, 'Download Dossier PDF', { fontSize: 12 });

// Mobile Hero Single Card Preview
b.rect(mX + 16, mHeroY + 335, mW - 32, 170, {
  backgroundColor: '#f8fafc',
  strokeColor: '#cbd5e1',
  roundness: true
});
b.pill(mX + 26, mHeroY + 345, 140, 22, 'FOLDER FAN: MOOV', { backgroundColor: '#e0f2fe', textColor: '#0369a1', fontSize: 9 });
b.text(mX + 26, mHeroY + 375, 'MOOV Fleet Telemetry Engine\n42k Active Trips · 140ms p95\nReact 19 + WebSockets', { fontSize: 11, fontFamily: 2 });
b.button(mX + 26, mHeroY + 440, mW - 52, 32, 'Open Case Study →', { variant: 'primary', fontSize: 11 });

// Mobile Hanging Showcase
const mHangY = mHeroY + 530;
b.line(mX + 16, mHangY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mHangY + 16, '// 02 SUSPENDED WORK (TOUCH FEED)', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

// 2 Sample Mobile Stacked Hanging Cards
['MOOV LOGISTICS ENGINE', 'GOVDOCS BLOCKCHAIN VAULT'].forEach((title, idx) => {
  const cY = mHangY + 42 + idx * 220;
  b.rect(mX + 16, cY, mW - 32, 205, {
    backgroundColor: '#ffffff',
    strokeColor: '#cbd5e1',
    roundness: true
  });
  b.rect(mX + 16, cY, mW - 32, 6, { backgroundColor: idx === 0 ? '#0284c7' : '#7c3aed' });
  b.text(mX + 26, cY + 18, title, { fontSize: 13, fontFamily: 2, strokeColor: '#0f172a' });
  b.rect(mX + 26, cY + 44, mW - 52, 70, { backgroundColor: '#f8fafc', strokeColor: '#e2e8f0', roundness: true });
  b.text(mX + 36, cY + 68, '[Real-time Dashboard Viewport]', { fontSize: 10, fontFamily: 3, strokeColor: '#64748b' });
  b.button(mX + 26, cY + 125, mW - 52, 32, 'View Dossier Details →', { variant: 'primary', fontSize: 11 });
  b.button(mX + 26, cY + 164, (mW - 58) / 2, 26, 'Live App ↗', { fontSize: 9 });
  b.button(mX + 26 + (mW - 58) / 2 + 6, cY + 164, (mW - 58) / 2, 26, 'GitHub ↗', { fontSize: 9 });
});

// Mobile MOOV Folder Deep Dive
const mMoovY = mHangY + 500;
b.line(mX + 16, mMoovY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mMoovY + 16, '// 03 MOOV LOGISTICS DOSSIER', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

b.rect(mX + 16, mMoovY + 40, mW - 32, 340, {
  backgroundColor: '#fffbeb',
  strokeColor: '#f59e0b',
  strokeWidth: 1.5,
  roundness: true
});
b.pill(mX + 26, mMoovY + 52, 200, 24, '📁 PRJ-01: FLEET ENGINE', { backgroundColor: '#fef3c7', textColor: '#92400e', fontSize: 10 });
// 4 Mobile Telemetry Pills
[
  { k: 'SLA', v: '99.98% High Availability' },
  { k: 'LATENCY', v: '140ms p95 Dispatch' },
  { k: 'ACTIVE', v: '42,850 Fleet Trips' },
  { k: 'PIPELINE', v: 'WebSockets & Redis Spatial' }
].forEach((stat, sIdx) => {
  b.pill(mX + 26, mMoovY + 86 + sIdx * 42, mW - 52, 34, `${stat.k}: ${stat.v}`, {
    backgroundColor: '#ffffff',
    strokeColor: '#fde68a',
    textColor: '#0f172a',
    fontSize: 10
  });
});
b.button(mX + 26, mMoovY + 265, mW - 52, 40, 'Open Case Study Modal →', { variant: 'primary', fontSize: 12 });

// Mobile About & License Badge
const mAboutY = mMoovY + 410;
b.line(mX + 16, mAboutY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mAboutY + 16, '// 04 DEVELOPER LICENSE & ETHOS', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

b.rect(mX + 16, mAboutY + 40, mW - 32, 360, {
  backgroundColor: '#f8fafc',
  strokeColor: '#0f172a',
  strokeWidth: 1.5,
  roundness: true
});
b.rect(mX + 16, mAboutY + 40, mW - 32, 32, { backgroundColor: '#0f172a' });
b.text(mX + 26, mAboutY + 48, 'DEVELOPER LICENSE // KARAN VERMA', { fontSize: 10, fontFamily: 3, strokeColor: '#ffffff' });

b.text(mX + 26, mAboutY + 84, 'ID: KV-2026-ENG-882\nDEGREE: B.Tech CSE (8.82 CGPA)\nINSTITUTION: Medi-Caps University\nAWARD: MSME Hackathon 3.0 (₹15L Grant)', {
  fontSize: 10,
  fontFamily: 3,
  strokeColor: '#1e293b'
});
b.ellipse(mX + 26, mAboutY + 175, 60, 60, { backgroundColor: '#fef3c7', strokeColor: '#f59e0b' });
b.text(mX + 38, mAboutY + 195, 'MSME\nSEAL', { fontSize: 9, fontFamily: 3, strokeColor: '#b45309' });
b.rect(mX + mW - 100, mAboutY + 175, 60, 60, { backgroundColor: '#ffffff', strokeColor: '#0f172a' });
b.text(mX + mW - 92, mAboutY + 198, '[QR CODE]', { fontSize: 8, fontFamily: 3, strokeColor: '#0f172a' });

// 2 Mobile Philosophy Snippets
b.pill(mX + 26, mAboutY + 255, mW - 52, 36, '1. System Reliability First (99.98% Uptime)', { backgroundColor: '#ffffff', fontSize: 9 });
b.pill(mX + 26, mAboutY + 298, mW - 52, 36, '2. High-Performance Frontends (Sub-100ms TTI)', { backgroundColor: '#ffffff', fontSize: 9 });
b.pill(mX + 26, mAboutY + 341, mW - 52, 36, '3. Distributed Architecture (Go + WebSockets)', { backgroundColor: '#ffffff', fontSize: 9 });

// Mobile Skills Wall (2-column compact grid)
const mStackY = mAboutY + 430;
b.line(mX + 16, mStackY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mStackY + 16, '// 05 TECHNICAL STACK (PINBOARD)', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

const mSkills = [
  'React 19 & TypeScript', 'Next.js App Router',
  'Node.js & Express', 'Go (Golang Systems)',
  'PostgreSQL & PostGIS', 'Redis Cache & Pub/Sub',
  'Docker & Containers', 'AWS & CloudFront'
];
mSkills.forEach((sk, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const pX = mX + 16 + col * ((mW - 38) / 2 + 6);
  const pY = mStackY + 40 + row * 40;
  b.pill(pX, pY, (mW - 38) / 2, 32, `✓ ${sk}`, {
    backgroundColor: '#ffffff',
    strokeColor: '#cbd5e1',
    fontSize: 9
  });
});

// Mobile Journey Section (INTERACTIVE TOUCH-SWIPE CAROUSEL)
const mJourY = mStackY + 230;
b.line(mX + 16, mJourY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mJourY + 16, '// 06 FLIGHT LOG (TOUCH SWIPE CAROUSEL)', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

// Carousel Container with Touch-Swipe Gestures
b.rect(mX + 16, mJourY + 38, mW - 32, 230, {
  backgroundColor: '#ffffff',
  strokeColor: '#0284c7',
  strokeWidth: 2,
  roundness: true
});
b.pill(mX + 26, mJourY + 50, 100, 24, '👈 SWIPE 👉', {
  backgroundColor: '#e0f2fe',
  textColor: '#0369a1',
  fontSize: 10
});
b.pill(mX + mW - 120, mJourY + 50, 90, 24, 'CARD 1 OF 8', {
  backgroundColor: '#f1f5f9',
  fontSize: 9
});
b.text(mX + 26, mJourY + 86, 'MSME Idea Hackathon 3.0\nNational Winner (Govt ₹15L Grant)', {
  fontSize: 14,
  fontFamily: 2,
  strokeColor: '#0f172a'
});
b.text(mX + 26, mJourY + 130, 'Ministry of MSME recognition for technology\ninnovation and scalable real-time systems.', {
  fontSize: 11,
  fontFamily: 2,
  strokeColor: '#64748b'
});
// Carousel Dot Pagination
b.text(mX + mW / 2 - 40, mJourY + 200, '● ○ ○ ○ ○ ○ ○ ○', {
  fontSize: 12,
  fontFamily: 3,
  strokeColor: '#0284c7'
});

// Mobile Resume Dossier
const mResY = mJourY + 300;
b.line(mX + 16, mResY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mResY + 16, '// 07 RESUME DOSSIER & SPECIMEN', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

b.rect(mX + 16, mResY + 40, mW - 32, 210, {
  backgroundColor: '#f8fafc',
  strokeColor: '#64748b',
  roundness: true
});
b.text(mX + 26, mResY + 56, 'KARAN VERMA — DOSSIER\nB.Tech CSE · 8.82 CGPA · MSME Winner\nReact 19, TypeScript, Node, Go, Redis', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#1e293b'
});
b.button(mX + 26, mResY + 140, mW - 52, 40, 'Download Official Resume PDF 📄', {
  variant: 'primary',
  fontSize: 12
});
b.pill(mX + 26, mResY + 188, mW - 52, 24, 'ATS COMPLIANT · MD5 VERIFIED', {
  backgroundColor: '#ecfdf5',
  textColor: '#047857',
  fontSize: 9,
  textAlign: 'center'
});

// Mobile Contact Desk & Footer
const mConY = mResY + 280;
b.line(mX + 16, mConY, [[mW - 32, 0]], { strokeColor: '#e2e8f0' });
b.text(mX + 16, mConY + 16, '// 08 CONTACT DESK & DISPATCH', { fontSize: 10, fontFamily: 3, strokeColor: '#0284c7' });

b.rect(mX + 16, mConY + 40, mW - 32, 180, {
  backgroundColor: '#fffdf5',
  strokeColor: '#fde68a',
  roundness: true
});
b.text(mX + 26, mConY + 54, '🕒 09:41 AM IST · INDORE, INDIA\nkaranverma.dev@gmail.com\nTelegram: @karanverma', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#78350f'
});
b.button(mX + 26, mConY + 120, mW - 52, 38, 'Open Contact Letter Form ✉️', {
  variant: 'primary',
  fontSize: 12
});

// Mobile Footer
b.rect(mX + 16, mConY + 240, mW - 32, 70, {
  backgroundColor: '#0f172a',
  strokeColor: '#1e293b',
  roundness: true
});
b.text(mX + 26, mConY + 256, '© 2026 Karan Verma · React 19 + TypeScript\nSystem Status: 200 OK (99.98% SLA)', {
  fontSize: 9,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});


// =============================================================
// 3. CASE STUDY MODAL OVERLAY (820px x 1000px)
// =============================================================
const oX = 1880;
const oY = 140;
const oW = 860;
const oH = 980;

// Dimmed Backdrop Container
b.rect(oX, oY, oW, oH, {
  backgroundColor: '#0f172ae6',
  strokeColor: '#334155',
  strokeWidth: 2,
  roundness: true
});

// Modal Window Frame
b.rect(oX + 30, oY + 30, oW - 60, oH - 60, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  strokeWidth: 2,
  roundness: true
});

// Modal Top Sticky Header
b.rect(oX + 30, oY + 30, oW - 60, 60, {
  backgroundColor: '#0f172a',
  strokeColor: '#0f172a'
});
b.pill(oX + 50, oY + 44, 260, 32, 'PROJECT DOSSIER // PRJ-01: MOOV', {
  backgroundColor: '#1e293b',
  strokeColor: '#38bdf8',
  textColor: '#38bdf8',
  fontSize: 11
});
b.pill(oX + 330, oY + 44, 130, 32, '● PRODUCTION LIVE', {
  backgroundColor: '#064e3b',
  strokeColor: '#059669',
  textColor: '#34d399',
  fontSize: 10
});
b.button(oX + oW - 120, oY + 44, 70, 32, 'ESC [✕]', {
  variant: 'primary',
  backgroundColor: '#334155',
  strokeColor: '#475569',
  fontSize: 12
});

// Modal Title & Tagline
b.text(oX + 54, oY + 110, 'MOOV: High-Throughput Vehicle Dispatch & Telemetry Hub', {
  fontSize: 22,
  fontFamily: 2,
  strokeColor: '#0f172a'
});
b.text(oX + 54, oY + 144, 'A mission-critical distributed platform enabling real-time geospatial tracking, fleet load rebalancing,\nand sub-second driver dispatch over low-latency WebSockets and spatial Redis clustering.', {
  fontSize: 12,
  fontFamily: 2,
  strokeColor: '#64748b'
});

// Official Project Credential Banner with Hologram Seal
b.rect(oX + 54, oY + 195, oW - 108, 64, {
  backgroundColor: '#fffbeb',
  strokeColor: '#f59e0b',
  strokeWidth: 1.5,
  roundness: true
});
b.ellipse(oX + 70, oY + 207, 40, 40, { backgroundColor: '#f59e0b', strokeColor: '#b45309' });
b.text(oX + 80, oY + 219, '★', { fontSize: 16, fontFamily: 2, strokeColor: '#ffffff' });
b.text(oX + 125, oY + 208, 'OFFICIAL PROJECT SPECIMEN // MSME RECOGNIZED ARCHITECTURE', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#92400e'
});
b.text(oX + 125, oY + 228, 'Verified Team Deliverable · Lead Architect: Karan Verma · Full Production Verification', {
  fontSize: 10,
  fontFamily: 2,
  strokeColor: '#b45309'
});

// 4 Telemetry Metrics Row
const mMetrics = [
  { val: '99.98%', label: 'PRODUCTION UPTIME', sub: 'Zero unhandled cluster failovers' },
  { val: '140ms', label: 'p95 DISPATCH LATENCY', sub: 'Sub-second event propagation' },
  { val: '42,850', label: 'CONCURRENT TRIPS', sub: 'In-memory geospatial index' },
  { val: '12.4k', label: 'INGESTION REQ / SEC', sub: 'Distributed Node/Go gateway' }
];

mMetrics.forEach((m, idx) => {
  const mBoxX = oX + 54 + idx * 194;
  const mBoxY = oY + 275;
  b.rect(mBoxX, mBoxY, 184, 82, {
    backgroundColor: '#f8fafc',
    strokeColor: '#cbd5e1',
    roundness: true
  });
  b.text(mBoxX + 12, mBoxY + 10, m.val, { fontSize: 20, fontFamily: 2, strokeColor: '#0f172a' });
  b.text(mBoxX + 12, mBoxY + 36, m.label, { fontSize: 9, fontFamily: 3, strokeColor: '#0284c7' });
  b.text(mBoxX + 12, mBoxY + 52, m.sub, { fontSize: 8, fontFamily: 2, strokeColor: '#64748b' });
});

// Problem vs Solution Columns
b.rect(oX + 54, oY + 375, 385, 170, {
  backgroundColor: '#fef2f2',
  strokeColor: '#fecaca',
  strokeWidth: 1.5,
  roundness: true
});
b.pill(oX + 68, oY + 390, 160, 22, 'PROBLEM STATEMENT', { backgroundColor: '#fee2e2', textColor: '#b91c1c', fontSize: 10 });
b.text(oX + 68, oY + 422, 'Legacy vehicle dispatch suffered from:\n• Polling bottlenecks creating 3-5s stale locations\n• Database lock contention under 10k+ concurrent drivers\n• Inaccurate ETA calculations ignoring real-time bottlenecks\n• Lack of end-to-end telemetry traceability', {
  fontSize: 10,
  fontFamily: 2,
  strokeColor: '#7f1d1d'
});

b.rect(oX + 459, oY + 375, 385, 170, {
  backgroundColor: '#f0fdf4',
  strokeColor: '#bbf7d0',
  strokeWidth: 1.5,
  roundness: true
});
b.pill(oX + 473, oY + 390, 160, 22, 'ARCHITECTURAL SOLUTION', { backgroundColor: '#dcfce7', textColor: '#15803d', fontSize: 10 });
b.text(oX + 473, oY + 422, 'Engineered high-throughput event pipeline:\n• WebSocket duplex channels replacing HTTP polling\n• Redis Geo-Spatial indexing for O(log N) proximity search\n• Partitioned PostgreSQL event logs with spatial indexes\n• Sub-100ms client UI updates with React 19 concurrent state', {
  fontSize: 10,
  fontFamily: 2,
  strokeColor: '#14532d'
});

// Tech Matrix in Modal
b.rect(oX + 54, oY + 560, oW - 108, 90, {
  backgroundColor: '#ffffff',
  strokeColor: '#cbd5e1',
  strokeWidth: 1.5,
  roundness: true
});
b.text(oX + 70, oY + 574, 'COMPLETE ARCHITECTURAL TECH STACK MATRIX:', { fontSize: 11, fontFamily: 3, strokeColor: '#0f172a' });
const modalTech = [
  'React 19 Frontend', 'TypeScript 5.x', 'Express.js Gateway', 'Socket.io Cluster',
  'Redis Geo-Spatial', 'PostgreSQL / PostGIS', 'Docker Containers', 'AWS EC2 / S3'
];
modalTech.forEach((tech, idx) => {
  const row = Math.floor(idx / 4);
  const col = idx % 4;
  b.pill(oX + 70 + col * 186, oY + 596 + row * 24, 178, 20, `• ${tech}`, {
    backgroundColor: '#f1f5f9',
    fontSize: 9
  });
});

// 4-Contributor Team Roster Card
b.rect(oX + 54, oY + 665, oW - 108, 140, {
  backgroundColor: '#f8fafc',
  strokeColor: '#0f172a',
  strokeWidth: 1.5,
  roundness: true
});
b.text(oX + 70, oY + 680, 'TEAM COLLABORATION & ATTRIBUTION ROSTER:', { fontSize: 11, fontFamily: 3, strokeColor: '#0f172a' });

const teamMembers = [
  { name: 'Karan Verma', role: 'Lead Architect & Full-Stack', focus: 'Real-time WebSocket pipeline, Redis indexing, React 19 UI' },
  { name: 'Sneha Patidar', role: 'Frontend & UI Systems', focus: 'Design system, interactive maps, accessible components' },
  { name: 'Sneha Sharma', role: 'Backend & DB Architecture', focus: 'PostgreSQL schema optimization, query profiling, spatial indexing' },
  { name: 'Sourav Chaudhary', role: 'Telemetry & Distributed Ops', focus: 'Cluster deployment, health checks, monitoring pipelines' }
];

teamMembers.forEach((mem, idx) => {
  const mCol = idx % 2;
  const mRow = Math.floor(idx / 2);
  const memX = oX + 70 + mCol * 385;
  const memY = oY + 705 + mRow * 46;

  b.pill(memX, memY, 370, 38, `${mem.name} — ${mem.role}\n${mem.focus}`, {
    backgroundColor: mem.name === 'Karan Verma' ? '#eff6ff' : '#ffffff',
    strokeColor: mem.name === 'Karan Verma' ? '#3b82f6' : '#cbd5e1',
    textColor: '#1e293b',
    fontSize: 9
  });
});

// Modal Action Buttons Bar
b.button(oX + 54, oY + 825, 360, 48, 'Launch Live Production Application ↗', {
  variant: 'accent',
  fontSize: 13
});
b.button(oX + 434, oY + 825, 360, 48, 'Inspect Source Code on GitHub ↗', {
  fontSize: 13
});


// =============================================================
// 4. DESIGN SYSTEM & WIREFRAME SPECIFICATION LEGEND
// =============================================================
const lX = 100;
const lY = 5780;
const lW = 1280;

b.rect(lX, lY, lW, 600, {
  backgroundColor: '#0f172a',
  strokeColor: '#1e293b',
  strokeWidth: 2,
  roundness: true
});
b.text(lX + 40, lY + 30, 'DESIGN SYSTEM TOKENS & RESPONSIVE BLUEPRINT SPECIFICATIONS', {
  fontSize: 20,
  fontFamily: 2,
  strokeColor: '#ffffff'
});
b.text(lX + 40, lY + 60, 'Core visual foundation: industrial blueprint, physical stationery metaphor, dark/light dynamic theme variables.', {
  fontSize: 12,
  fontFamily: 3,
  strokeColor: '#94a3b8'
});

// Color Swatches
b.text(lX + 40, lY + 95, 'COLOR PALETTE TOKENS:', { fontSize: 12, fontFamily: 3, strokeColor: '#38bdf8' });
const palette = [
  { name: 'Canvas Dark', hex: '#0B0F17' },
  { name: 'Surface Slate', hex: '#1E293B' },
  { name: 'Border Slate', hex: '#334155' },
  { name: 'Accent Orange', hex: '#F97316' },
  { name: 'Cyan Highlight', hex: '#06B6D4' },
  { name: 'Emerald Live', hex: '#10B981' },
  { name: 'Paper Manilla', hex: '#FEF3C7' },
  { name: 'Canvas Light', hex: '#F8FAFC' }
];

palette.forEach((p, idx) => {
  const pX = lX + 40 + idx * 148;
  const pY = lY + 120;
  b.rect(pX, pY, 136, 60, {
    backgroundColor: p.hex,
    strokeColor: '#475569',
    strokeWidth: 1,
    roundness: true
  });
  b.text(pX + 10, pY + 16, p.name, {
    fontSize: 10,
    fontFamily: 2,
    strokeColor: ['#0B0F17', '#1E293B', '#334155'].includes(p.hex) ? '#ffffff' : '#0f172a'
  });
  b.text(pX + 10, pY + 34, p.hex, {
    fontSize: 9,
    fontFamily: 3,
    strokeColor: ['#0B0F17', '#1E293B', '#334155'].includes(p.hex) ? '#94a3b8' : '#475569'
  });
});

// Typography Scale
b.text(lX + 40, lY + 210, 'TYPOGRAPHY HIERARCHY SCALE:', { fontSize: 12, fontFamily: 3, strokeColor: '#38bdf8' });
const typeScale = [
  { tag: 'Display Headline', size: '36px - 44px', role: 'Hero statement & Section display' },
  { tag: 'Section Title', size: '24px - 28px', role: 'Major section headlines' },
  { tag: 'Card Title / H3', size: '16px - 18px', role: 'Project cards & telemetry titles' },
  { tag: 'Body Text', size: '13px - 14px', role: 'Descriptions & dossier copy' },
  { tag: 'Monospace Pill', size: '10px - 11px', role: 'Status pills, tech tags & SLAs' }
];

typeScale.forEach((ts, idx) => {
  const tY = lY + 240 + idx * 36;
  b.pill(lX + 40, tY, 180, 28, ts.tag, { backgroundColor: '#1e293b', textColor: '#38bdf8', fontSize: 10 });
  b.pill(lX + 230, tY, 110, 28, ts.size, { backgroundColor: '#0f172a', textColor: '#ffffff', fontSize: 10 });
  b.text(lX + 355, tY + 6, ts.role, { fontSize: 11, fontFamily: 2, strokeColor: '#cbd5e1' });
});

// Breakpoints & Layout Specs
b.text(lX + 700, lY + 210, 'RESPONSIVE BREAKPOINT SPECIFICATIONS:', { fontSize: 12, fontFamily: 3, strokeColor: '#38bdf8' });
const breakPoints = [
  { bp: 'Mobile (<640px)', spec: 'Single column stacked, 16px padding, touch-swipe carousel for Journey' },
  { bp: 'Tablet (640px - 1024px)', spec: '2-column responsive grid, scaled badges, touch & mouse dual support' },
  { bp: 'Desktop (1024px - 1440px)', spec: 'Full 1280px max-width, 3D tilt folder fan, hanging cards clothesline' },
  { bp: 'Wide (>1440px)', spec: 'Centered content container, ambient backdrop glow, fixed navigation' }
];

breakPoints.forEach((bp, idx) => {
  const bY = lY + 240 + idx * 46;
  b.pill(lX + 700, bY, 160, 34, bp.bp, { backgroundColor: '#1e293b', textColor: '#fde68a', fontSize: 10 });
  b.text(lX + 875, bY + 8, bp.spec, { fontSize: 11, fontFamily: 2, strokeColor: '#cbd5e1', width: 360 });
});

// Interaction Annotations
b.line(lX + 40, lY + 450, [[lW - 80, 0]], { strokeColor: '#334155' });
b.text(lX + 40, lY + 475, 'PHYSICAL METAPHOR & INTERACTION PATTERNS:', { fontSize: 12, fontFamily: 3, strokeColor: '#38bdf8' });
b.text(lX + 40, lY + 505, '1. Frosted Folder Fan: 3D perspective tilts with CSS transform on mouse movement.\n2. Clothesline Suspension: Elastic suspension cables with gravity tilt on project cards.\n3. Manila Dossier Deep-Dive: Expandable architectural tabs with real-time telemetry streams.\n4. Developer License Badge: Hologram shimmer, security microprint borders, and QR verification.\n5. Flight Log Journey: Desktop fanning timeline + Mobile horizontal touch-swipe carousel.\n6. Postal Mail Form: Interactive desk stationery with wax seal transmit interaction.', {
  fontSize: 11,
  fontFamily: 2,
  strokeColor: '#cbd5e1'
});


// =============================================================
// CONNECTING ARROWS & ANNOTATION FLOWS
// =============================================================
// Arrow from Desktop Hero CTA to Hanging Cards
b.arrow(dX + 140, heroY + 390, [[0, 120]], { strokeColor: '#0284c7', strokeWidth: 2 });

// Arrow from Desktop Hanging Card to Deep Dive
b.arrow(dX + 200, hangY + 480, [[0, 100]], { strokeColor: '#0284c7', strokeWidth: 2 });

// Arrow from Desktop Deep Dive CTA to Modal
b.arrow(dX + 610, moovY + 430, [[oX - (dX + 610), -200]], { strokeColor: '#ea580c', strokeWidth: 2.5 });
b.text(dX + 850, moovY + 330, 'TRIGGERS FULL CASE STUDY MODAL OVERLAY', {
  fontSize: 11,
  fontFamily: 3,
  strokeColor: '#ea580c'
});

// Arrow from Mobile Deep Dive CTA to Modal
b.arrow(mX + mW / 2, mMoovY + 285, [[oX - (mX + mW / 2), -150]], { strokeColor: '#ea580c', strokeWidth: 2 });


// =============================================================
// WRITE OUTPUT FILES
// =============================================================
const portfolioDir = path.resolve('/Users/karanverma/Desktop/Projects/Portfolio');

// 1. Output wireframe.excalidraw
const excalidrawJSON = b.toJSON();
const excalidrawPath = path.join(portfolioDir, 'wireframe.excalidraw');
fs.writeFileSync(excalidrawPath, JSON.stringify(excalidrawJSON, null, 2), 'utf-8');
console.log(`✓ Successfully generated ${excalidrawPath} (${excalidrawJSON.elements.length} elements)`);

// 2. Output wireframe.svg
const svgContent = b.toSVG();
const svgPath = path.join(portfolioDir, 'wireframe.svg');
fs.writeFileSync(svgPath, svgContent, 'utf-8');
console.log(`✓ Successfully generated ${svgPath} (${Math.round(svgContent.length / 1024)} KB)`);

// 3. Output wireframe.html (Interactive standalone preview tool)
const htmlPath = path.join(portfolioDir, 'wireframe.html');
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Karan Verma — Portfolio UI Wireframe Model</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: #0b0f17;
      color: #f8fafc;
      overflow: hidden;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    header {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      flex-wrap: wrap;
      gap: 12px;
    }
    .brand-title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: -0.02em;
    }
    .badge {
      background: #0284c7;
      color: white;
      font-size: 10px;
      font-family: ui-monospace, monospace;
      padding: 3px 8px;
      border-radius: 9999px;
      font-weight: 600;
    }
    .btn-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #cbd5e1;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      text-decoration: none;
    }
    .btn:hover {
      background: #334155;
      color: #ffffff;
      border-color: #64748b;
    }
    .btn.active {
      background: #0284c7;
      border-color: #38bdf8;
      color: #ffffff;
    }
    .btn-primary {
      background: #ea580c;
      border-color: #f97316;
      color: white;
    }
    .btn-primary:hover {
      background: #c2410c;
    }
    main {
      flex: 1;
      position: relative;
      overflow: auto;
      background: #0b0f17;
      background-image: 
        radial-gradient(#1e293b 1px, transparent 1px),
        radial-gradient(#1e293b 1px, #0b0f17 1px);
      background-size: 40px 40px;
      background-position: 0 0, 20px 20px;
      display: flex;
      justify-content: center;
      padding: 40px;
    }
    .svg-container {
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      transform-origin: top center;
      max-width: 100%;
    }
    .svg-container svg {
      display: block;
      width: 100%;
      height: auto;
      max-width: 2860px;
    }
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #1e293b;
      border: 1px solid #38bdf8;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 12px;
      color: #e0f2fe;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
      z-index: 100;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand-title">
      <span>⚡ KARAN VERMA PORTFOLIO</span>
      <span class="badge">COMPLETE UI WIREFRAME</span>
      <span style="color: #64748b; font-size: 12px;">React 19 · TypeScript · Vite · Tailwind</span>
    </div>
    <div class="btn-group">
      <button class="btn active" onclick="setView('all', this)">Overview</button>
      <button class="btn" onclick="setView('desktop', this)">Desktop (1280px)</button>
      <button class="btn" onclick="setView('mobile', this)">Mobile (390px)</button>
      <button class="btn" onclick="setView('modal', this)">Case Study Modal</button>
      <button class="btn" onclick="setView('tokens', this)">Tokens & System</button>
    </div>
    <div class="btn-group">
      <button class="btn" onclick="adjustZoom(-0.15)">Zoom Out -</button>
      <span id="zoom-level" style="font-size: 11px; font-family: monospace; color: #94a3b8; width: 44px; text-align: center;">100%</span>
      <button class="btn" onclick="adjustZoom(0.15)">Zoom In +</button>
      <button class="btn" onclick="resetZoom()">Reset</button>
      <a class="btn btn-primary" href="./wireframe.excalidraw" download="wireframe.excalidraw">Download .excalidraw 📥</a>
      <a class="btn" href="https://excalidraw.com" target="_blank" rel="noopener">Open Excalidraw.com ↗</a>
    </div>
  </header>
  <main id="main-viewport">
    <div class="svg-container" id="svg-wrap">
      ${svgContent}
    </div>
  </main>
  <div class="toast">
    💡 <strong>Free Dev Tool:</strong> You can open <code>wireframe.excalidraw</code> in <a href="https://excalidraw.com" target="_blank" style="color:#38bdf8; text-decoration:underline;">Excalidraw.com</a> or the VS Code Excalidraw extension for drag-and-drop vector editing.
  </div>
  <script>
    let currentZoom = 0.55;
    const svgWrap = document.getElementById('svg-wrap');
    const zoomLabel = document.getElementById('zoom-level');
    const mainViewport = document.getElementById('main-viewport');

    function updateTransform() {
      svgWrap.style.transform = \`scale(\${currentZoom})\`;
      zoomLabel.textContent = Math.round(currentZoom * 100) + '%';
    }

    function adjustZoom(delta) {
      currentZoom = Math.max(0.15, Math.min(2.5, currentZoom + delta));
      updateTransform();
    }

    function resetZoom() {
      currentZoom = 0.55;
      updateTransform();
      mainViewport.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    function setView(view, btnEl) {
      document.querySelectorAll('.btn-group .btn').forEach(b => b.classList.remove('active'));
      if (btnEl) btnEl.classList.add('active');

      if (view === 'all') {
        currentZoom = 0.45;
        updateTransform();
        mainViewport.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else if (view === 'desktop') {
        currentZoom = 0.75;
        updateTransform();
        mainViewport.scrollTo({ top: 100, left: 0, behavior: 'smooth' });
      } else if (view === 'mobile') {
        currentZoom = 0.9;
        updateTransform();
        mainViewport.scrollTo({ top: 100, left: 700, behavior: 'smooth' });
      } else if (view === 'modal') {
        currentZoom = 0.85;
        updateTransform();
        mainViewport.scrollTo({ top: 100, left: 1100, behavior: 'smooth' });
      } else if (view === 'tokens') {
        currentZoom = 0.8;
        updateTransform();
        mainViewport.scrollTo({ top: 2800, left: 0, behavior: 'smooth' });
      }
    }

    updateTransform();
  </script>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
console.log(`✓ Successfully generated ${htmlPath} (${Math.round(htmlContent.length / 1024)} KB)`);

// 4. Output WIREFRAME_SPEC.md (Comprehensive Documentation)
const specPath = path.join(portfolioDir, 'WIREFRAME_SPEC.md');
const specContent = `# Karan Verma Portfolio — Complete UI Wireframe & Architecture Blueprint

This specification details the comprehensive UI design, layout wireframes, interactive mechanics, and responsive architecture of the currently hosted **Karan Verma Personal Developer Portfolio** (React 19 + TypeScript + Vite + Tailwind CSS).

---

## 🛠️ Free Developer Tools & Editable Files

All wireframe models have been generated and placed directly in the **\`Portfolio/\`** directory:

| File Name | Format | Primary Tool / Editor | Purpose |
| :--- | :--- | :--- | :--- |
| **[\`wireframe.excalidraw\`](./wireframe.excalidraw)** | Excalidraw JSON v2 | [Excalidraw.com](https://excalidraw.com) (Free web app) or VS Code Excalidraw extension | **Proper Editable Wireframe Diagram Model**: 714 interactive vector elements (rectangles, labels, connectors, pills, cards). Fully drag-and-drop editable. |
| **[\`wireframe.svg\`](./wireframe.svg)** | Vector SVG (2860x6480) | Any Browser, Figma, Penpot, Inkscape, Illustrator | High-resolution scalable vector graphic of all viewports and design tokens. |
| **[\`wireframe.html\`](./wireframe.html)** | Standalone HTML5 Application | Chrome / Safari / Edge / Firefox | Interactive browser preview with device viewport switching (Desktop, Mobile, Modal, Tokens) and zoom/pan tools. |
| **[\`WIREFRAME_SPEC.md\`](./WIREFRAME_SPEC.md)** | Markdown Document | Markdown reader / GitHub / IDE | Architectural layout specification, responsive matrices, and interaction flows. |

### How to Open & Edit in Free Web Tools:
1. **Via Excalidraw Web App (100% Free, No Login Required)**:
   - Navigate to [https://excalidraw.com](https://excalidraw.com) in any browser.
   - Click the **Hamburger Menu (≡)** in the top-left corner.
   - Click **Open** (or press \`Ctrl+O\` / \`Cmd+O\`).
   - Select the file **\`Portfolio/wireframe.excalidraw\`**.
   - You can now freely move cards, edit typography, adjust dimensions, and export as PNG/SVG.
2. **Via Visual Studio Code**:
   - Install the free **Excalidraw** extension by \`pomdtr\` from the VS Code Marketplace.
   - Click on \`wireframe.excalidraw\` in the file tree. It will render natively inside your editor with real-time vector tools.
3. **Via Browser Preview**:
   - Double-click or open \`Portfolio/wireframe.html\` in your browser to inspect sections, toggle viewports, and jump between breakpoints.

---

## 📐 Layout Architecture & Viewport Map

The wireframe model documents three complete viewport projections and an architectural design system:

\`\`\`
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  PROJECT TITLE BLOCK & RUNTIME METADATA (X: 100, Y: 30, Width: 2660px)                 │
└────────────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────┐  ┌────────────────┐  ┌────────────────────────────────────┐
│ VIEWPORT 1: DESKTOP      │  │ VIEWPORT 2:    │  │ VIEWPORT 3: CASE STUDY MODAL       │
│ 1280px × 5600px          │  │ MOBILE 390px   │  │ 860px × 980px                      │
│                          │  │                │  │                                    │
│ 00. Floating Glass Pill  │  │ 00. Mobile Bar │  │ • Frosted Dark Backdrop            │
│ 01. Hero & Folder Fan    │  │ 01. Hero Stack │  │ • Sticky Header [ESC / ✕]          │
│ 02. Hanging Showcase     │  │ 02. Touch Feed │  │ • Official Credential Seal         │
│ 03. MOOV Folder Deep-Dive│  │ 03. Telemetry  │  │ • 4 Live Telemetry Metrics         │
│ 04. Developer License    │  │ 04. Badge View │  │ • Problem Statement vs Solution    │
│ 05. Studio Pinboard      │  │ 05. 2-Col Grid │  │ • Architecture Tech Matrix         │
│ 06. Flight Log Passes    │  │ 06. Touch-Swipe│  │ • 4-Contributor Team Roster        │
│ 07. Resume Binder Dossier│  │ 07. Dossier    │  │ • Live Demo & GitHub Action Bar    │
│ 08. Stationery Desk      │  │ 08. Contact    │  └────────────────────────────────────┘
│ 09. Terminal Footprint   │  │ 09. Footer     │
└──────────────────────────┘  └────────────────┘
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ VIEWPORT 4: DESIGN SYSTEM TOKENS & RESPONSIVE BREAKPOINT SPEC (X: 100, Y: 5780)        │
│ • Color Palette (Canvas #0B0F17, Slate #1E293B, Accent #F97316, Cyan #06B6D4)          │
│ • Typography Scale (Display 38px, Title 26px, Card 16px, Body 14px, Code 11px)         │
│ • Breakpoint Matrix (Mobile <640px, Tablet 640-1024px, Desktop >1024px)               │
└────────────────────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 🧩 Detailed Component Specifications

### 00. Top Floating Navbar (\`Navbar.tsx\`)
- **Structure**: Floating Apple-style glass pill (\`backdrop-blur-md\`), fixed at \`top: 1.5rem\`.
- **Elements**:
  - Brand identity pill: \`⚡ KV // KARAN VERMA\`
  - Smooth anchor navigation: \`Home\`, \`Work\`, \`Deep-Dive\`, \`About\`, \`Stack\`, \`Journey\`, \`Resume\`, \`Contact\`
  - Theme Toggle: Interactive Day (\`☀️\`) / Night (\`🌙\`) mode with persistent \`localStorage\` state.
  - Call to Action: \`Let's Talk →\` button with hover glow.
- **Mobile Variant**: Streamlined 50px pill with KV badge, theme icon, and hamburger modal trigger.

### 01. Hero Section (\`Hero.tsx\` + \`FrostedFolderFan.tsx\`)
- **Availability Pill**: \`🟢 Open for Full-Stack & System Design roles\`
- **Display Typography**: *"Architecting Resilient Web Systems & Industrial Grade Interfaces."*
- **Credentials Summary**:
  - B.Tech in Computer Science & Engineering (8.82 CGPA, Medi-Caps University)
  - Winner of Ministry of MSME Idea Hackathon 3.0 (₹15 Lakh Govt Grant)
- **Call-to-Action Group**: \`[Explore Work ↓]\` (primary), \`[Direct Contact →]\`, \`[Download Dossier PDF]\`.
- **Frosted Folder Fan**: 3 interactive physical folder cards arranged in an overlapping fan:
  - Card 1 (-12° tilt): MOOV Logistics (42K Trips, 140ms Latency)
  - Card 2 (0° tilt): GovDocs Decentralized Vault (Ethereum + IPFS)
  - Card 3 (+12° tilt): SwaasthySetu Telemedicine (WebRTC audio/video)

### 02. Hanging Cards Showcase (\`HangingCardsShowcase.tsx\`)
- **Visual Metaphor**: Overhead steel suspension cable with metallic binder clips/clothespins.
- **Physics**: Subtle alternating tilt angles (-2°, +2°) with mouse scroll tilt reactions.
- **Card Contents**:
  - \`MOOV Logistics\`: Real-time vehicle telemetry hub (React 19, TypeScript, Node, WebSockets).
  - \`GovDocs Vault\`: Decentralized credential verification (Solidity, IPFS, Ethers.js).
  - \`SwaasthySetu\`: Low-bandwidth rural telemedicine diagnostic suite (WebRTC, Node, MongoDB).
  - \`AI Code Auditor\`: AST-based vulnerability analyzer (Python, AST parser, FastAPI).
- **Actions**: \`[View Full Case Study →]\` triggers modal; \`[Live App ↗]\` and \`[GitHub ↗]\` direct links.

### 03. MOOV Large Floating Folder Deep-Dive (\`MoovFolderDeepDive.tsx\`)
- **Physical Manila Tab**: Serialized label \`📁 DOSSIER // PRJ-01: HIGH CONCURRENCY LOGISTICS\`.
- **Split Screen Layout**:
  - **Left Pane (Live Telemetry)**:
    - \`99.98%\` Production SLA (Zero unhandled failovers)
    - \`140ms\` p95 Dispatch Latency (WebSocket pipeline)
    - \`42,850\` Active Concurrent Fleet Trips (Redis spatial index)
    - \`12.4k\` Telemetry Requests/sec (Distributed Go/Node gateway)
  - **Right Pane (Architectural Blueprints)**:
    - Layer 1: Client State (React 19 Concurrent + Leaflet Spatial Clusters)
    - Layer 2: API Gateway (Express + Socket.io + JWT Cluster)
    - Layer 3: Cache & Stream (Redis Geo-spatial Pub/Sub)
    - Layer 4: Storage Layer (PostgreSQL with PostGIS extensions)
  - **Credentials**: Explicit attribution to team contributors: Sneha Patidar, Sneha Sharma, Sourav Chaudhary, Karan Verma.

### 04. About & Operating Philosophy (\`AboutSection.tsx\` + \`DeveloperLicenseBadge.tsx\`)
- **Left Column: Developer License Card**:
  - Official Code Republic badge with photo box, License ID \`#KV-2026-ENG-882\`.
  - Degree: B.Tech Computer Science & Engineering (8.82 CGPA, Medi-Caps University).
  - Security Hologram Seal with MSME 3.0 stamp.
  - Machine-readable QR Code verification module.
- **Right Column: 4 Operating Philosophy Pillars**:
  1. *System Reliability First*: Fail gracefully, circuit breakers, zero downtime.
  2. *High-Performance Frontends*: Sub-100ms TTI, 60fps interaction budgets.
  3. *Distributed Architecture*: Decoupled services communicating over structured event streams.
  4. *Human-Centered DX*: Strict end-to-end typing, reproducible containers.
- **Govt of India MSME Grant**: Dedicated feature card highlighting the ₹15 Lakh award.

### 05. Technical Arsenal Studio Pinboard (\`SkillsSection.tsx\`)
- **Visual Metaphor**: Studio corkboard wall with 4 wooden/brass pushpins.
- **4 Categorized Sticky Matrix Boards**:
  - *Frontend Engineering*: React 19, TypeScript, Next.js, Tailwind CSS, Redux Toolkit, Framer Motion.
  - *Backend & Distributed*: Node.js, Express, Go, Python, WebSockets, REST & GraphQL, gRPC.
  - *Databases & Caching*: PostgreSQL, PostGIS, MongoDB, Redis, Prisma ORM, ACID transactions.
  - *DevOps, Cloud & Tooling*: Docker, Git/GitHub Actions, AWS (S3, EC2), Linux, Vite.

### 06. Flight Log & Journey Milestones (\`JourneySection.tsx\`)
- **Desktop**: Fan of 8 chronological boarding passes / milestone folders:
  - 2024: MSME Idea Hackathon 3.0 National Winner (₹15 Lakh Grant)
  - 2024: B.Tech CSE Graduation (8.82 CGPA, Medi-Caps University)
  - 2024: MOOV Logistics Engine Launch
  - 2023: GovDocs Decentralized Vault Launch
  - 2023: SwaasthySetu Telemedicine Platform
  - 2023: Technical Leadership & Student Club Lead
  - 2022: Full-Stack Engineering Certifications
  - 2026: Present Systems Engineering & Distributed Research
- **Mobile**: Touch-swipe carousel with swipe gesture feedback, active card indicators, and dot pagination.

### 07. Official Resume Dossier (\`ResumeSection.tsx\`)
- **Physical Metaphor**: Archival Manilla binder with brass eyelets and perforated document sheets.
- **Top Row**: Identification pass + Pop Art sticker (*"STRICTLY SYSTEM ARCHITECTURE"*).
- **Middle Row**: Perforated experience & education record with clear role bullet points.
- **Bottom Row**: Official PDF trigger button (*"Download Official PDF [📄]"*) and ATS-compliant validation badge.

### 08. Collaboration & Contact Desk (\`ContactSection.tsx\`)
- **Desk Stationery Metaphor**:
  - **Live World Clock**: Real-time IST (UTC+5:30) station clock indicating active working hours in Indore, India.
  - **Direct Channels**: Email, Telegram, LinkedIn, GitHub, and location coordinates.
  - **Postal Letter Transmitter**:
    - Air Mail postage stamp & postmark graphics.
    - Fields: Sender Name, Email, Project Brief, Budget/Timeline.
    - Submit trigger: Wax seal stamp button (*"Seal & Dispatch Message [✉️]"*).

### 09. System Blueprint Footer (\`Footer.tsx\`)
- Terminal console prompt: \`kv@portfolio ~ % status: 200 OK | SLA: 99.98%\`.
- Build stack indicators: React 19, TypeScript, Vite, Tailwind CSS.
- Copyright attribution & smooth scroll "Return to Top" button.

### 10. Interactive Case Study Modal Overlay (\`CaseStudyModal.tsx\`)
- Full-screen glassmorphic overlay triggered by any "View Case Study" action.
- Sticky header with project code, status pill, and keyboard ESC / close button.
- Official Project Specimen banner with gold hologram stamp.
- Problem Statement vs Architectural Solution dual-column breakdown.
- 4 Live telemetry stat boxes (Uptime, Latency, Concurrency, Ingestion).
- Complete Architectural Tech Stack matrix.
- Team Attribution Roster listing Sneha Patidar, Sneha Sharma, Sourav Chaudhary, and Karan Verma.
- Action Bar: Direct links to launch the live application and inspect the GitHub repository.

---

## 🔄 Interaction & User Flow Diagram

\`\`\`mermaid
flowchart TD
    User([Visitor Arrives]) --> Navbar[Floating Glass Navbar]
    User --> Hero[Hero Section: Industrial Title & Bio]
    
    Hero -->|Explore Work| Clothesline[02. Hanging Cards Showcase]
    Hero -->|Click Fan Folder| Modal[10. Case Study Modal Overlay]
    Hero -->|Direct Contact| Contact[08. Collaboration & Contact Desk]
    Hero -->|Download Dossier| Resume[07. Resume Dossier Binder]

    Clothesline -->|Click Card Dossier| Modal
    Clothesline -->|Scroll Down| MoovDeep[03. MOOV Folder Deep-Dive]

    MoovDeep -->|Expand Spec| Modal
    MoovDeep -->|Scroll Down| About[04. Developer License & Ethos]

    About --> Skills[05. Studio Pinboard Skills Matrix]
    Skills --> Journey[06. Flight Log Milestones]
    
    Journey -->|Desktop: 8-Folder Fan| Resume
    Journey -->|Mobile: Touch Swipe Carousel| Resume

    Resume -->|Download PDF| PDF([KaranVermaResume.pdf])
    Resume --> Contact

    Contact -->|Fill Postal Letter| SendMail([Transmit Message via API])
    Contact --> Footer[09. Blueprint Terminal Footer]
    Footer -->|Return to Top| Navbar
\`\`\`

---

## 🎨 Design System Tokens

| Category | Token Name | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Colors** | \`bg-canvas\` | \`#0b0f17\` (dark) / \`#f8fafc\` (light) | Main viewport backdrop |
| | \`surface-card\` | \`#1e293b\` (dark) / \`#ffffff\` (light) | Container surfaces and modal windows |
| | \`border-slate\` | \`#334155\` (dark) / \`#cbd5e1\` (light) | Structural borders & separators |
| | \`accent-orange\` | \`#ea580c\` / \`#f97316\` | Primary CTA buttons & highlight badges |
| | \`accent-cyan\` | \`#0284c7\` / \`#38bdf8\` | Links, active states & technical labels |
| | \`status-green\` | \`#059669\` / \`#10b981\` | SLA indicators & live status tags |
| **Typography**| \`font-sans\` | System UI, Inter, -apple-system | Body text, titles, navigation |
| | \`font-mono\` | SFMono, Menlo, Consolas, monospace | SLAs, coordinates, code tags, badge IDs |
| **Breakpoints** | Mobile | \`< 640px\` | Single column stacked, touch carousel |
| | Tablet | \`640px - 1024px\` | 2-column grid, compact drawer tabs |
| | Desktop | \`> 1024px\` | 1280px max-width, 3D folder fan, suspension cable |

---

*Verified and synchronized with the live portfolio codebase on localhost:3000.*
`;

fs.writeFileSync(specPath, specContent, 'utf-8');
console.log(`✓ Successfully generated ${specPath} (${Math.round(specContent.length / 1024)} KB)`);

