import React, { useState } from "react";
import { WORK_CASES, WorkCaseItem } from "../config/business";
import { ArrowRight, Car, ShieldCheck } from "lucide-react";

export const WorkGallerySection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(WORK_CASES[0].id);

  const activeCase = WORK_CASES.find((c) => c.id === selectedCaseId) || WORK_CASES[0];

  return (
    <section id="work" className="py-24 md:py-32 bg-[#0B1120] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase mb-3 bg-[#FF6B35]/10 border border-[#FF6B35]/25 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span>DOCUMENTED WORKSHOP BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            OUR WORK
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
            Real vehicles, real air-conditioning diagnostics, and verified discharge temperature deltas.
          </p>
        </div>

        {/* Automotive Case-Study Layout: 60% Featured Case on Left + Interactive Numbered Rows on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: 60% Featured Case Study Card on Carbon */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-700/80 rounded-2xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
              <div className="inline-flex items-center space-x-2 bg-black/60 border border-slate-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span>FEATURED CASE STUDY</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30 px-3 py-1 rounded-full">
                CASE {activeCase.number} • {activeCase.category.toUpperCase()}
              </span>
            </div>

            {/* Vehicle & Title */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
                <Car className="w-4 h-4" />
                <span>{activeCase.vehicle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                {activeCase.title}
              </h3>
            </div>

            {/* Thermal Stats Display with Rich Contrast */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6">
              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-700/80 text-center">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Initial Temp</span>
                <span className="text-xl font-mono font-extrabold text-amber-500 block mt-1">
                  {activeCase.stats.initialTemp}
                </span>
                <span className="text-[10px] text-amber-400/80 font-medium">Warm Cabin</span>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-sky-500/40 text-center relative overflow-hidden ring-1 ring-sky-500/30">
                <div className="absolute top-0 right-0 w-8 h-8 bg-sky-500/10 rounded-bl-xl" />
                <span className="text-[10px] font-mono uppercase text-slate-300 block font-bold">Final Temp</span>
                <span className="text-xl font-mono font-extrabold text-sky-400 block mt-1">
                  {activeCase.stats.finalTemp}
                </span>
                <span className="text-[10px] text-sky-300 font-semibold">Ice Chill</span>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-700/80 text-center">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Service Time</span>
                <span className="text-lg font-mono font-extrabold text-white block mt-1">
                  {activeCase.stats.duration}
                </span>
                <span className="text-[10px] text-slate-400">Completed</span>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-700/80 text-center">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Delta Result</span>
                <span className="text-sm font-mono font-extrabold text-[#FF6B35] block mt-1 truncate">
                  {activeCase.stats.pressureDelta}
                </span>
                <span className="text-[10px] text-slate-400">Validated</span>
              </div>
            </div>

            {/* Documented Breakdown */}
            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-[#FF6B35] block">
                  REPORTED COMPLAINT & SYMPTOMS:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeCase.issue}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-300 block">
                  SPECIALIST DIAGNOSTIC FINDINGS:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCase.diagnostic}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-[#FF6B35] block">
                  TECHNICAL SOLUTION EXECUTED:
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Outcome Strip */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                <span>{activeCase.summary}</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Case Rows with High-Contrast Carbon Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="pb-2 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                SELECT CASE STUDY ARCHIVE
              </span>
              <span className="text-xs text-slate-500 font-mono">
                CLICK TO PREVIEW
              </span>
            </div>

            {WORK_CASES.map((item: WorkCaseItem) => {
              const isSelected = item.id === selectedCaseId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`group p-5 rounded-xl cursor-pointer border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "bg-[#1E293B] text-white border-l-4 border-l-[#FF6B35] border-slate-700 shadow-xl ring-1 ring-[#FF6B35]/30"
                      : "bg-[#0F172A] hover:bg-[#1E293B]/70 text-slate-300 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-1.5 pr-3">
                    <div className="flex items-center space-x-3">
                      <span
                        className={`text-sm font-mono font-bold ${
                          isSelected ? "text-[#FF6B35]" : "text-slate-500 group-hover:text-[#FF6B35]"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider font-mono ${
                          isSelected ? "text-[#FF6B35]" : "text-slate-400"
                        }`}
                      >
                        {item.vehicle}
                      </span>
                    </div>

                    <h4
                      className={`text-sm sm:text-base font-bold font-display ${
                        isSelected ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`text-xs line-clamp-1 ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {item.issue}
                    </p>
                  </div>

                  <div className="flex items-center pl-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1.5 ${
                        isSelected
                          ? "bg-[#FF6B35] text-white"
                          : "bg-slate-800 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Specialization Assurance Badge */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-slate-800 text-xs text-slate-400 flex items-center space-x-3 mt-4">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] flex-shrink-0" />
              <span>All case studies performed exclusively on dedicated automotive HVAC service bays.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
