/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";
import { PhotoDetail } from "./pages/PhotoDetail";
import { About } from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
        <Routes>
          {/* PhotoDetail is a full-screen overlay, it doesn't need the standard header/footer */}
          <Route path="/photo/:photoId" element={<PhotoDetail />} />
          
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  {/* Mock Blog page */}
                  <Route path="/blog" element={<div className="pt-48 px-desktop-margin text-headline-xl">Blog coming soon.</div>} />
                  <Route path="/:projectId" element={<ProjectPage />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
