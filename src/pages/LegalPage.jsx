import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal } from "../components/Layout";
import { LEGAL } from "../data/apps";
import "./Legal.css";

export default function LegalPage() {
  const { slug } = useParams();
  const doc = LEGAL[slug];
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, [slug]);

  if (!doc) return <Navigate to="/legal" />;

  const colorVar = `var(--${doc.colorClass})`;

  return (
    <div className="legal-page-wrapper">
      <div className={`legal-page-inner ${loaded ? "visible" : ""}`}>
        <Link
          to="/legal"
          className={`btn btn-sm btn-${doc.colorClass}`}
          style={{ marginBottom: 36 }}
        >
          ← All Legal
        </Link>

        <h1>{doc.title}</h1>
        <p className="legal-meta">
          {doc.app} · Last updated: {doc.updated}
        </p>

        {doc.sections.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="legal-section">
              <h2 style={{ borderBottomColor: colorVar }}>{s.heading}</h2>
              <div className="legal-section-content">{s.content}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
