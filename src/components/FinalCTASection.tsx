import React from "react";
import { Phone, MessageSquare, ArrowRight, Snowflake } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-[#0B0F19] text-white relative overflow-hidden border-b border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B35]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mx-auto flex items-center justify-center text-[#FF6B35] mb-6 shadow-lg">
          <Snowflake className="w-7 h-7" />
        </div>

        <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FFE4D6] uppercase mb-4 bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          <span>COOLING RESTORATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight leading-tight mb-4">
          READY TO GET YOUR AC COOLING AGAIN?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
          Book a precision AC diagnosis or speak directly with our automotive climate control specialist today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-orange-glow transition-all active:scale-95"
          >
            <span>BOOK AC SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
            className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-4 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF6B35]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-[#0F172A] text-sm font-bold px-6 py-4 rounded-lg transition-colors shadow-clean-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
            <span>WHATSAPP</span>
          </a>
        </div>

        <div className="mt-10 text-xs text-slate-400 font-mono">
          {BUSINESS_CONFIG.fullAddress}, {BUSINESS_CONFIG.area}, {BUSINESS_CONFIG.city}
        </div>

      </div>
    </section>
  );
};
