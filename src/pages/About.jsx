import { useState, useEffect } from "react";
import { Reveal, FloatingShape } from "../components/Layout";
import "./About.css";

const PALETTE = [
  { name: "Ledgr Yellow", hex: "#FFD60A", color: "var(--yellow)" },
  { name: "Block Pink", hex: "#FF6B9D", color: "var(--pink)" },
  { name: "Fokus Teal", hex: "#4ECDC4", color: "var(--teal)" },
  { name: "Electric Blue", hex: "#4D96FF", color: "var(--blue)" },
  { name: "Lime Green", hex: "#6BCB77", color: "var(--green)" },
  { name: "Cream Base", hex: "#FFF8E7", color: "var(--cream)" },
];

const PRINCIPLES = [
  {
    title: "Bold > Safe",
    desc: "We choose colors, shapes, and typography that demand attention. Safe design is forgettable design.",
    color: "var(--yellow)",
  },
  {
    title: "Privacy First",
    desc: "Your data stays on your device. No accounts, no bank logins, no tracking. Period.",
    color: "var(--teal)",
  },
  {
    title: "Function + Fun",
    desc: "Utility apps should be useful AND enjoyable. XP systems, streaks, achievements — gamification done right.",
    color: "var(--pink)",
  },
  {
    title: "One Language",
    desc: "SpaceMono. 3px borders. Hard shadows. Cream backgrounds. Every app feels like part of a family.",
    color: "var(--blue)",
  },
];

export default function About() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      {/* HERO */}
      <section className="about-hero">
        <div className="grid-dots" style={{ opacity: 0.04 }} />
        <FloatingShape color="var(--yellow)" size={50} top="20%" right="8%" rotate={12} delay={0} />
        <FloatingShape color="var(--pink)" size={38} top="60%" left="6%" rotate={-8} delay={1.5} />
        <FloatingShape color="var(--teal)" size={44} top="35%" left="80%" rotate={20} delay={0.8} />

        <div className={`about-hero-inner ${loaded ? "visible" : ""}`}>
          <h1>
            Why<br />
            <span className="highlight highlight-yellow-dark">Neubrutalism</span>?
          </h1>
          <p>
            Every app looks the same. Soft gradients, rounded corners, muted
            palettes — the same templates repackaged endlessly. We went the other
            way.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="about-content">
          <Reveal>
            <div className="about-prose">
              <p>
                Neubrutalism is a design movement that takes cues from brutalist
                architecture and web brutalism — but makes it vibrant, playful, and
                tactile. Thick borders. Hard drop shadows. Monospace typography.
                Colors that refuse to be ignored.
              </p>
              <p>
                We build utility apps — expense tracking, habit building, focus
                timers — the kind of tools that are genuinely useful but rarely
                exciting. Most apps in these categories are forgettable. They work,
                but you wouldn't show one to a friend.
              </p>
              <p>
                We wanted to change that. Our apps are designed to feel like they
                belong on your home screen, not hidden in a folder. Software should
                have personality.
              </p>
            </div>
          </Reveal>

          {/* PALETTE */}
          <Reveal delay={0.15}>
            <h2 className="about-section-title">The Palette</h2>
            <div className="palette-grid">
              {PALETTE.map((c, i) => (
                <div key={i} className="palette-card">
                  <div className="palette-swatch" style={{ background: c.color }} />
                  <div className="palette-info">
                    <div className="palette-name">{c.name}</div>
                    <div className="palette-hex">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* PRINCIPLES */}
          <Reveal delay={0.2}>
            <h2 className="about-section-title">Design Principles</h2>
            <div className="principles-list">
              {PRINCIPLES.map((p, i) => (
                <div key={i} className="principle-card">
                  <div className="principle-dot" style={{ background: p.color }} />
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
