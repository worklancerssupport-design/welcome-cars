import React, { useState, useEffect } from "react";
import { Snowflake, Menu, X, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

interface HeaderProps {
  onOpenBooking: () => void;
}

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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How AC Works", href: "#anatomy" },
    { name: "Diagnostics", href: "#problems" },
    { name: "Our Work", href: "#work" },
    { name: "About", href: "#owner" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md"
          : "bg-[#0B0F19]/75 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
              isScrolled
                ? "bg-[#0F172A] text-[#FF6B35] shadow-sm"
                : "bg-white/10 backdrop-blur-md border border-white/20 text-[#FF6B35] group-hover:border-[#FF6B35]"
            }`}
          >
            <Snowflake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span
                className={`font-display font-extrabold text-base sm:text-lg tracking-tight block leading-none transition-colors ${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                }`}
              >
                WELCOME
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
            </div>
            <span
              className={`text-[9.5px] font-mono font-bold tracking-[0.2em] uppercase block transition-colors mt-1 ${
                isScrolled ? "text-[#FF6B35]" : "text-[#FFE4D6]"
              }`}
            >
              CAR AC SERVICE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12.5px] font-semibold tracking-wider transition-colors uppercase ${
                isScrolled
                  ? "text-slate-700 hover:text-[#FF6B35]"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
            className={`flex items-center space-x-2 text-xs font-mono font-bold tracking-wider uppercase transition-colors px-3 py-1.5 rounded-md ${
              isScrolled
                ? "text-[#0F172A] hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span className="hidden xl:inline">{BUSINESS_CONFIG.phoneNumber}</span>
            <span className="xl:hidden">CALL</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-orange-glow transition-all active:scale-95"
          >
            <span>BOOK AC SERVICE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-[#0F172A] hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-clean-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-[#0F172A] hover:text-[#FF6B35] tracking-wide border-b border-slate-100 uppercase font-sans"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 space-y-2.5">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#F1F5F9] text-[#0F172A] font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#FF6B35]" />
                <span>Call {BUSINESS_CONFIG.phoneNumber}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#FF6B35] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-orange-glow"
              >
                <span>BOOK AC SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
