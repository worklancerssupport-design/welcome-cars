import React from "react";
import { Snowflake, MapPin, Phone, Clock, Navigation } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] text-slate-300 text-xs pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Specialty */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FF6B35]">
                <Snowflake className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>
            
            <p className="text-xs text-[#FF6B35] font-semibold tracking-wide uppercase font-mono">
              Specialized Car AC Service & Repair
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated exclusively to car air-conditioning diagnostics, refrigerant recharge, micro-leak detection, and compressor overhaul.
            </p>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-slate-400">
              We do NOT offer general engine repair, bodywork, tyres, or vehicle washing.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#hero" },
                { name: "Services (01-08)", href: "#services" },
                { name: "How AC Works", href: "#anatomy" },
                { name: "Symptom Diagnostics", href: "#problems" },
                { name: "Our Work (Case Studies)", href: "#work" },
                { name: "About Owner", href: "#owner" },
                { name: "Location & Directions", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#FF6B35] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Workshop Contact
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.fullAddress}, {BUSINESS_CONFIG.area}, {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state} - {BUSINESS_CONFIG.pincode}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneNumber}`} className="hover:text-[#FF6B35] transition-colors font-mono">
                  {BUSINESS_CONFIG.phoneNumber}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                <span>{BUSINESS_CONFIG.workingHours} (Mon - Sat)</span>
              </li>
            </ul>
          </div>

          {/* Local Service Areas & SEO Anchor */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Specialist Service Areas
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Providing precision car AC diagnostics, gas leakage repair, and compressor rebuilds across {BUSINESS_CONFIG.area} and surrounding neighborhoods in {BUSINESS_CONFIG.city}.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#FF6B35] hover:text-[#E55A27] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {BUSINESS_CONFIG.businessName}. All rights reserved. Dedicated Automotive AC Specialist.
          </div>
          <div className="flex items-center space-x-4">
            <span>Specialized Car HVAC Only</span>
            <span>•</span>
            <span>R134a & R1234yf Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
