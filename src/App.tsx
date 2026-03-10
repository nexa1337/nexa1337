/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { BottomNavbar } from "./components/BottomNavbar";
import { Footer } from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ استخدمنا HashRouter
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./components/Projects";
import { PricingPage } from "./pages/PricingPage";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop يضمن أن أي تغيير فـ route يرجع الصفحة لـ top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexa1337-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
          <Navbar />
          <main className="flex-1 pb-24 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<div className="pt-16"><Projects /></div>} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
          <BottomNavbar />
        </div>
      </Router>
    </ThemeProvider>
  );
}