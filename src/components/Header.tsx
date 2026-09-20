import React, { useState, useEffect } from "react";
import { Snowflake, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "How A/C Works", href: "#anatomy" },
  { name: "Diagnostics", href: "#problems" },
  { name: "Our Work", href: "#work" },
  { name: "Owner", href: "#owner" },
  { name: "Location", href: "#location" },
];

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200"
          : "bg-brand-obsidian/70 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                isScrolled
                  ? "bg-brand-slateDark"
                  : "bg-white/10 border border-white/15"
              }`}
            >
              <Snowflake
                className={`w-4 h-4 transition-colors ${
                  isScrolled ? "text-sky-400" : "text-white"
                }`}
                strokeWidth={2}
              />
            </div>
            <span
              className={`font-display font-bold text-base tracking-tight transition-colors ${
                isScrolled ? "text-brand-textDark" : "text-white"
              }`}
            >
              Welcome Car A/C
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                  isScrolled
                    ? "text-slate-700 hover:text-sky-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden lg:inline-flex items-center bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-colors"
          >
            <span>Book A/C Service</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-brand-textDark hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:text-sky-600"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex justify-center">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center bg-brand-orange/90 hover:bg-brand-orange text-white font-medium text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-colors"
                >
                  <span>Book A/C Service</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
