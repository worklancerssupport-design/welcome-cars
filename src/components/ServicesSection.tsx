import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";
import { AC_SERVICES, ServiceItem } from "../config/business";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedId, setSelectedId] = useState<string>(AC_SERVICES[0].id);

  const activeService = AC_SERVICES.find((s) => s.id === selectedId) || AC_SERVICES[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0B1120] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase mb-3 bg-[#FF6B35]/10 border border-[#FF6B35]/25 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span>EXPERT HVAC SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            CAR AC SERVICES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Focused specifically on keeping your car's air-conditioning system operating at peak thermal efficiency.
          </p>
        </div>

        {/* 8 Numbered Services Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered List of 01 to 08 Services */}
          <div className="lg:col-span-7 divide-y divide-slate-800 border-t border-b border-slate-800">
            {AC_SERVICES.map((service: ServiceItem) => {
              const isSelected = service.id === selectedId;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`group py-5 px-4 sm:px-5 cursor-pointer transition-all duration-200 flex items-center justify-between rounded-xl ${
                    isSelected
                      ? "bg-[#1E293B] border-l-4 border-l-[#FF6B35] shadow-lg"
                      : "hover:bg-slate-850/60 hover:bg-[#0F172A]/70"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className={`text-sm font-mono font-bold pt-0.5 transition-colors ${
                        isSelected ? "text-[#FF6B35]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <div className="flex items-center space-x-2.5">
                        <h3
                          className={`text-base sm:text-lg font-bold font-display transition-colors ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700 hidden sm:inline-block">
                          {service.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pl-3">
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#FF6B35] translate-x-1"
                          : "text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Featured Detail Box */}
          <div className="lg:col-span-5 bg-[#0F172A] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-28 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-extrabold font-mono text-[#FF6B35]">
                    {activeService.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">/ 08</span>
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/30">
                  {activeService.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                  {activeService.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FF6B35] font-medium font-mono uppercase tracking-wide">
                  {activeService.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                  {activeService.description}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  SPECIALIST PROCEDURES INCLUDED:
                </span>
                {activeService.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-lg shadow-orange-glow transition-all active:scale-95"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center space-x-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>OEM-Grade Equipment & Calibrated Gauges</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
