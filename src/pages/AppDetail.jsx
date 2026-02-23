import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal, FloatingShape } from "../components/Layout";
import { APPS } from "../data/apps";
import "./AppDetail.css";

export default function AppDetail() {
  const { appId } = useParams();
  const app = APPS.find((a) => a.id === appId);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, [appId]);

  if (!app) return <Navigate to="/" />;

  return (
    <div>
      {/* HERO */}
      <section className="app-hero" style={{ background: app.color }}>
        <div className="grid-dots" style={{ opacity: 0.04 }} />
        <FloatingShape color="var(--cream)" size={50} top="20%" right="10%" rotate={15} delay={0} />
        <FloatingShape color="var(--cream)" size={35} top="60%" left="6%" rotate={-10} delay={1} />

        <div className={`app-hero-inner ${loaded ? "visible" : ""}`}>
          <Link to="/" className="btn btn-sm btn-cream" style={{ marginBottom: 36 }}>
            ← All Apps
          </Link>

          <div className="app-hero-meta">
            <div className="app-hero-icon">{app.letter}</div>
            <span className="tag tag-cream">{app.platforms}</span>
          </div>

          <h1 className="app-hero-title">{app.name}</h1>
          <p className="app-hero-tagline">{app.tagline}</p>
          <p className="app-hero-desc">{app.description}</p>

          <div className="app-hero-actions">
            <a href={app.storeUrl} className="btn btn-cream">
              Download Free
            </a>
            <Link to={`/legal/privacy-${app.id}`} className="btn btn-outline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="app-detail-content">
          <Reveal>
            <h2 className="app-section-title">Features</h2>
            <p className="app-section-sub">Everything included. No hidden catches.</p>
          </Reveal>

          <div className="feature-tags-grid">
            {app.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div
                  className="feature-tag-lg"
                  style={{ background: i % 2 === 0 ? app.colorHex + "40" : "white" }}
                >
                  {f}
                </div>
              </Reveal>
            ))}
          </div>

          {/* FREE vs PRO */}
          <div className="pricing-grid">
            <Reveal>
              <div className="pricing-card">
                <div className="pricing-card-header" style={{ background: "var(--cream)" }}>
                  <span className="pricing-card-title">Free</span>
                  <span className="tag">$0</span>
                </div>
                <div className="pricing-card-body">
                  {app.freeFeatures.map((f, i) => (
                    <div key={i} className="pricing-feature">
                      <span className="pricing-check">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pricing-card">
                <div className="pricing-card-header" style={{ background: app.color }}>
                  <span className="pricing-card-title">Pro</span>
                  <span className="tag tag-cream">{app.proPrice}</span>
                </div>
                <div className="pricing-card-body">
                  {app.proFeatures.map((f, i) => (
                    <div key={i} className="pricing-feature">
                      <span className="pricing-star">★</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-cta" style={{ background: app.color }}>
        <Reveal>
          <h2>Try {app.name} — it's free</h2>
          <a href={app.storeUrl} className="btn btn-cream">
            Download on the App Store
          </a>
        </Reveal>
      </section>
    </div>
  );
}
