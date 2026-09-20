import React from "react";
import { Gauge, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

interface IntroSectionProps {
  onOpenBooking: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Specialization Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#FFE4D6] border border-[#FF6B35]/25 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span>AC SPECIALISTS ONLY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0F172A] tracking-tight leading-[1.12]">
              CAR AC IS ALL WE DO.
            </h2>

            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
              We specialize exclusively in car air-conditioning systems. We do not service engines, change tyres, or perform general mechanical repairs.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Automotive climate control is a closed thermodynamic circuit operating under extreme pressures and delicate thermal deltas. When a general garage guesses with a top-up can, they risk overpressurizing your compressor. At Welcome Car AC Service, every manifold gauge, vacuum recovery unit, and diagnostic scan tool is dedicated to achieving verified ice-cold vent temperatures.
            </p>

            {/* Checklist of what we DO NOT do */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-clean-sm space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold font-mono uppercase tracking-wider text-[#0F172A]">
                <ShieldAlert className="w-4 h-4 text-[#FF6B35]" />
                <span>Our Strict Business Boundary:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-500 font-medium">
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Engine Repairs</span></div>
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Oil & Filters</span></div>
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Tyres & Wheels</span></div>
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Body & Paint</span></div>
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Brake Overhauls</span></div>
                <div className="flex items-center space-x-1.5"><span className="text-[#FF6B35] font-bold">✕</span><span className="line-through decoration-[#FF6B35]/50">No Car Washing</span></div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF6B35] hover:text-[#E55A27] transition-colors group"
              >
                <span>Consult Our Car AC Specialist Directly</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Deep Carbon High-Contrast AC Focus Card */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white border border-slate-800 rounded-2xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF6B35]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                HVAC WORKSHOP STANDARD
              </span>
              <span className="text-xs font-mono font-bold text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30 px-3 py-0.5 rounded-full">
                100% FOCUS
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#FF6B35] shadow-sm">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Dual-Manifold Pressure Diagnostics
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Accurate high-side and low-side pressure validation to verify compressor displacement efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#FF6B35] shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Automated Refrigerant Recovery
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Zero atmospheric venting. Precise OEM gram-weight recharge with clean synthetic PAG compressor oil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#FF6B35] shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    280 PSI Nitrogen Leak Detection
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Hydrostatic pressure testing and halogen sniffer probes to isolate pinholes before recharging gas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">TARGET CABIN DISCHARGE:</span>
              <span className="font-bold text-[#FF6B35] bg-black/40 px-2.5 py-1 rounded border border-slate-700">
                4°C — 6°C CHILL
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
