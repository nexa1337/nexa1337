import { Home, Briefcase, Star, DollarSign } from "lucide-react";
import { FaWolfPackBattalion } from "react-icons/fa";
import { motion } from "motion/react";
import { GlitchIcon } from "./GlitchIcon";
import { Link } from "react-router-dom";

export function BottomNavbar() {
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Briefcase },
    { name: "Logo", href: "/", icon: FaWolfPackBattalion, isLogo: true },
    { name: "Projects", href: "/projects", icon: Star },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/40 pb-2 pt-1"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isLogo) {
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex flex-col items-center justify-center w-full h-full -mt-6"
              >
                <div className="bg-background p-3 rounded-full border border-border/40 shadow-lg relative text-primary">
                  <GlitchIcon icon={Icon} className="w-8 h-8" />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center w-full h-full space-y-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
