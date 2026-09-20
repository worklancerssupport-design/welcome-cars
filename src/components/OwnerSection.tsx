import React from "react";
import { User, CheckCircle2, Award, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const OwnerSection: React.FC = () => {
  return (
    <section id="owner" className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Master Technician Portrait Box */}
          <div className="md:col-span-5 flex flex-col items-center sm:items-start">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl bg-white border border-slate-200 p-4 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF6B35]/15 rounded-bl-full pointer-events-none" />
              
              <div className="w-full h-full rounded-2xl bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center border border-slate-800 relative overflow-hidden text-white shadow-2xl">
                <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4 shadow-lg ring-4 ring-[#FF6B35]/20 animate-orange-glow">
                  <User className="w-12 h-12 text-[#FF6B35]" />
                </div>
                
                <h3 className="text-2xl font-extrabold font-display text-white tracking-wide">
                  {BUSINESS_CONFIG.ownerName}
                </h3>
                <span className="text-xs font-semibold text-[#FF6B35] tracking-wider uppercase mt-1 font-mono">
                  Master HVAC Technician & Founder
                </span>

                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400 mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>Tharamani, Chennai</span>
                </div>
                
                <div className="mt-5 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 text-xs font-mono font-bold text-slate-200 flex items-center space-x-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>{BUSINESS_CONFIG.yearsOfExperience} Hands-on Specialization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Story & Editorial Philosophy */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase bg-white border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span>THE PERSON BEHIND THE WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0F172A] tracking-tight leading-[1.12]">
              "Car AC is a specialized trade. We treat it like one."
            </h2>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              "Most drivers in Chennai face recurring AC cooling loss because general garages treat AC issues with a quick gas top-up can. Gas is injected, but the micro-leak in the condenser tube or the worn compressor displacement valve is never diagnosed."
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              "At <strong className="text-[#0F172A]">{BUSINESS_CONFIG.businessName}</strong>, I take personal pride in testing every vehicle with dual-manifold gauges, performing 280 PSI nitrogen hold tests to verify zero leakage, and rebuilding compressor components whenever possible to save customers from costly unnecessary part replacements."
            </p>

            {/* Direct Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Direct inspection by Master Tech Mani",
                "280 PSI Nitrogen leak guarantee",
                "OEM gram-weight precision charging",
                "Honest repair before costly part replacement"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs font-semibold text-[#0F172A] p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            {/* Direct Phone Call Strip */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold font-mono text-[#0F172A] bg-white border border-slate-300 hover:border-[#FF6B35] px-4 py-2.5 rounded-lg shadow-sm transition-colors"
              >
                <span>Call Mani Directly:</span>
                <span className="text-[#FF6B35]">{BUSINESS_CONFIG.phoneNumber}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
