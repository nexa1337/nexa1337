import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, MousePointerClick } from "lucide-react";

interface ExternalLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExternalLinksModal({ isOpen, onClose }: ExternalLinksModalProps) {
  const links = [
    { name: "N E X A 1337", url: "https://nexa1337.github.io/nexa1337", clicks: "42.8k" },
    { name: "N E X A 1337 - Portfolio", url: "https://nexa1337.github.io/Owner", clicks: "34.2k" },
    { name: "N E X A 1337 - Digital Store", url: "https://nexa1337.github.io/digitalstore", clicks: "28.4k" },
    { name: "N E X A 1337 - Tool", url: "https://nexa1337.github.io/tool", clicks: "15.9k" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border/50 p-6">
              <h2 className="text-xl font-bold">N E X A 1337 Links</h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/30 hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{link.name}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <MousePointerClick className="h-3 w-3" />
                      {link.clicks} clicks
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
