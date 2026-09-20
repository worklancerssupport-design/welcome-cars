import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import OWNER_DATA from "../data/owner.json";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "How A/C Works", href: "#anatomy" },
  { name: "Symptom Diagnostics", href: "#problems" },
  { name: "Our Work", href: "#work" },
  { name: "Owner", href: "#owner" },
  { name: "Location", href: "#location" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-obsidian text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

          {/* Brand & positioning */}
          <div className="space-y-4">
            <p className="font-display font-bold text-lg text-white tracking-tight">
              {OWNER_DATA.businessName}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized Car A/C Service & Repair — diagnostics, refrigerant recharge, micro-leak detection, and compressor overhaul.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-5">
              Quick Navigation
            </p>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Contact */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-5">
              Workshop Contact
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400/80 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-slate-200 leading-relaxed">
                  {OWNER_DATA.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400/80 flex-shrink-0" strokeWidth={2} />
                <a
                  href={`tel:${OWNER_DATA.phoneNumber}`}
                  className="text-slate-200 hover:text-white transition-colors tabular-nums"
                >
                  +91 {OWNER_DATA.phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400/80 flex-shrink-0" strokeWidth={2} />
                <span className="text-slate-200 tabular-nums">
                  {OWNER_DATA.workingHours} · {OWNER_DATA.workingDays}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Trust tags */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {OWNER_DATA.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Specialized Car HVA/C Only</span>
            <span className="text-slate-700">·</span>
            <span>R134a & R1234yf Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
