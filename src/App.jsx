import { Routes, Route } from "react-router-dom";
import { Nav, Footer, ScrollToTop } from "./components/Layout";
import Home from "./pages/Home";
import AppDetail from "./pages/AppDetail";
import About from "./pages/About";
import LegalIndex from "./pages/LegalIndex";
import LegalPage from "./pages/LegalPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:appId" element={<AppDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<LegalIndex />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
      </Routes>
      <Footer />
    </>
  );
}
