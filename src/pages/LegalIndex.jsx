import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Layout";
import "./Legal.css";

const LEGAL_CARDS = [
  { title: "Privacy Policy — Ledgr", desc: "How Ledgr handles your data.", path: "/legal/privacy-ledgr", color: "var(--yellow)" },
  { title: "Terms of Use — Ledgr", desc: "Terms and conditions for Ledgr.", path: "/legal/terms-ledgr", color: "var(--yellow)" },
  { title: "Privacy Policy — Block", desc: "How Block handles your data.", path: "/legal/privacy-block", color: "var(--pink)" },
  { title: "Terms of Use — Block", desc: "Terms and conditions for Block.", path: "/legal/terms-block", color: "var(--pink)" },
  { title: "Privacy Policy — Fokus", desc: "How Fokus handles your data.", path: "/legal/privacy-fokus", color: "var(--teal)" },
  { title: "Terms of Use — Fokus", desc: "Terms and conditions for Fokus.", path: "/legal/terms-fokus", color: "var(--teal)" },
  { title: "Privacy Policy — Recur", desc: "How Recur handles your data.", path: "/legal/privacy-recur", color: "var(--orange)" },
  { title: "Terms of Use — Recur", desc: "Terms and conditions for Recur.", path: "/legal/terms-recur", color: "var(--orange)" },
];

export default function LegalIndex() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div>
      <section className="legal-index-header">
        <div className={`legal-index-inner ${loaded ? "visible" : ""}`}>
          <h1>Legal</h1>
          <p>Transparency first. Read our policies for each app.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="legal-cards-grid">
          {LEGAL_CARDS.map((c, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Link to={c.path} className="legal-card-link">
                <div className="legal-card-dot" style={{ background: c.color }} />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
