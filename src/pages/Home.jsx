import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal, Marquee, FloatingShape } from "../components/Layout";
import { APPS } from "../data/apps";
import "./Home.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="grid-dots" />
        <FloatingShape color="var(--yellow)" size={60} top="15%" left="8%" rotate={12} delay={0} />
        <FloatingShape color="var(--pink)" size={40} top="25%" right="10%" rotate={-8} delay={1} />
        <FloatingShape color="var(--teal)" size={50} top="70%" left="12%" rotate={20} delay={2} />
        <FloatingShape color="var(--yellow)" size={35} top="65%" right="8%" rotate={-15} delay={0.5} />

        <div className={`hero-content ${loaded ? "visible" : ""}`}>
          <div className="hero-badge">3 apps · 1 design language</div>

          <h1 className="hero-title">
            <span className="highlight highlight-yellow">TRACK.</span>
            <br />
            <span className="highlight highlight-pink">BUILD.</span>
            <br />
            <span className="highlight highlight-teal">FOCUS.</span>
          </h1>

          <p className="hero-sub">
            A suite of utility apps built with neubrutalism — bold colors, thick
            borders, no fluff. Every app looks the same. Ours look unforgettable.
          </p>

          <div className="hero-cta">
            <a href="#apps" className="btn">
              Explore Apps ↓
            </a>
            <Link to="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* APPS */}
      <section className="section" id="apps">
        <Reveal>
          <div className="section-header">
            <h2>The Apps</h2>
            <p>Three tools. One design language. Zero data leaving your device.</p>
          </div>
        </Reveal>

        <div className="app-grid">
          {APPS.map((app, i) => (
            <Reveal key={app.id} delay={i * 0.15}>
              <Link to={`/app/${app.id}`} className="app-card" style={{ background: app.color }}>
                <div className="app-card-header">
                  <div className="app-card-icon">{app.letter}</div>
                  <span className="tag tag-cream">{app.platforms}</span>
                </div>
                <div className="app-card-body">
                  <h3>{app.name}</h3>
                  <p className="app-card-tagline">{app.description}</p>
                  <div className="app-card-features">
                    {app.features.slice(0, 6).map((f) => (
                      <span key={f} className="tag">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="app-card-footer">
                  <span className="app-card-price">{app.price}</span>
                  <span className="app-card-arrow">View Details →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid">
          {[
            { n: "3", label: "Apps Shipped" },
            { n: "5+", label: "Platforms" },
            { n: "0", label: "Data Collected" },
            { n: "∞", label: "Bold Design" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="stat-item">
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="section cta-section">
        <div className="grid-dots" />
        <Reveal>
          <h2 className="cta-title">
            Ready to try{" "}
            <span className="highlight highlight-pink-inline">different</span>?
          </h2>
          <p className="cta-sub">
            Download any app for free. No sign-up, no bank login, no data
            sharing. Just bold design and useful tools.
          </p>
          <a href="#apps" className="btn">
            Browse Apps ↑
          </a>
        </Reveal>
      </section>
    </div>
  );
}
