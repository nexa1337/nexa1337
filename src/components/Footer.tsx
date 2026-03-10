import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaWolfPackBattalion, FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import { GlitchIcon } from "./GlitchIcon";
import { Link } from "react-router-dom";
import { ExternalLinksModal } from "./ExternalLinksModal";
import { useState } from "react";

export function Footer() {
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative text-primary">
                <GlitchIcon icon={FaWolfPackBattalion} className="h-8 w-8" />
              </div>
              <Link to="/" className="text-2xl font-bold tracking-tighter inline-block">
                N E X A <span className="text-primary">1337</span>
              </Link>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering businesses with AI, websites, marketing & automation.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/nexa1337" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com/nexa1337" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://tiktok.com/@nexa.1337" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTiktok size={20} />
              </a>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => setIsLinksModalOpen(true)}
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                N E X A 1337 Links
              </button>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:Support@nexa1337.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Support@nexa1337.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-primary mt-0.5">
                  <FaWhatsapp size={20} />
                </div>
                <a href="https://wa.me/212723242286" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  +212 723 242 286
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Rabat, Morocco
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NEXA1337. All rights reserved.</p>
        </div>
      </div>
      <ExternalLinksModal isOpen={isLinksModalOpen} onClose={() => setIsLinksModalOpen(false)} />
    </footer>
  );
}
