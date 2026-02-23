import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// ==================== SCROLL TO TOP ====================
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ==================== REVEAL ON SCROLL ====================
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(44px)",
        transition: `all 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ==================== NAV ====================
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        <span className="nav-dot" style={{ background: "var(--yellow)" }} />
        <span className="nav-dot" style={{ background: "var(--pink)" }} />
        <span className="nav-dot" style={{ background: "var(--teal)" }} />
        <span style={{ marginLeft: 4 }}>NEUBRUTALISM</span>
      </Link>
      <div className="nav-links">
        <Link to="/">Apps</Link>
        <Link to="/about">About</Link>
        <Link to="/legal">Legal</Link>
      </div>
    </nav>
  );
}

// ==================== FOOTER ====================
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Neubrutalism Apps</h3>
          <p>
            Bold, beautifully designed utility apps. Built solo. Shipped
            worldwide. Your data stays yours.
          </p>
        </div>
        <div className="footer-col">
          <h4>Apps</h4>
          <Link to="/app/ledgr">Ledgr</Link>
          <Link to="/app/block">Block</Link>
          <Link to="/app/fokus">Fokus</Link>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/legal/privacy-ledgr">Privacy — Ledgr</Link>
          <Link to="/legal/privacy-block">Privacy — Block</Link>
          <Link to="/legal/privacy-fokus">Privacy — Fokus</Link>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#" target="_blank" rel="noopener">TikTok</a>
          <a href="#" target="_blank" rel="noopener">Twitter/X</a>
          <a href="#" target="_blank" rel="noopener">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Neubrutalism Apps. All rights reserved.</span>
        <span>Built with ◆ and SpaceMono</span>
      </div>
    </footer>
  );
}

// ==================== MARQUEE ====================
export function Marquee() {
  const items = [
    "BOLD COLORS ◆",
    "THICK BORDERS ◆",
    "HARD SHADOWS ◆",
    "SPACEMONO ◆",
    "NO FLUFF ◆",
    "100% PRIVACY ◆",
  ];

  return (
    <div className="marquee">
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

// ==================== FLOATING SHAPE ====================
export function FloatingShape({ color, size, top, left, right, rotate = 0, delay = 0 }) {
  return (
    <div
      className="floating-shape"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
