import React, { useState } from "react";
import { ChevronRight, Stethoscope } from "lucide-react";
import { AC_PROBLEMS, ProblemItem } from "../config/business";

interface ProblemsSectionProps {
  onSelectProblem: (problemName: string) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onSelectProblem }) => {
  const [selectedId, setSelectedId] = useState<string>(AC_PROBLEMS[0].id);

  const activeProblem = AC_PROBLEMS.find((p) => p.id === selectedId) || AC_PROBLEMS[0];

  return (
    <section id="problems" className="py-24 md:py-32 bg-white text-[#0F172A] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase mb-3 bg-[#FFE4D6] border border-[#FF6B35]/25 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span>SYMPTOM CHECKER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0F172A] tracking-tight">
            CAR AC NOT COOLING?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select what you are experiencing in your car to see probable causes and the recommended inspection procedure.
          </p>
        </div>

        {/* Interactive Problem Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Interactive Symptom Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {AC_PROBLEMS.map((prob: ProblemItem) => {
              const isSelected = prob.id === selectedId;
              return (
                <button
                  key={prob.id}
                  onClick={() => setSelectedId(prob.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-200 flex items-center justify-between group border ${
                    isSelected
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg ring-2 ring-[#FF6B35]/30"
                      : "bg-[#F8FAFC] hover:bg-slate-100 text-[#0F172A] border-slate-200/90 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <span className="text-sm font-bold font-sans tracking-wide">
                        {prob.symptom}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#FF6B35] text-white"
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        {prob.urgency}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 line-clamp-1 ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {prob.shortDesc}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? "text-[#FF6B35] translate-x-1" : "text-slate-400 group-hover:text-[#0F172A]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Diagnostic Inspection Analysis Box */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-9 shadow-clean-sm">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <Stethoscope className="w-5 h-5 text-[#FF6B35]" />
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#0F172A]">
                    SPECIALIST DIAGNOSTIC ASSESSMENT
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#FF6B35] bg-[#FFE4D6] px-3 py-1 rounded-full border border-[#FF6B35]/25">
                  URGENCY: {activeProblem.urgency.toUpperCase()}
                </span>
              </div>

              {/* Symptom Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F172A]">
                  {activeProblem.symptom}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {activeProblem.shortDesc}
                </p>
              </div>

              {/* Possible Causes List */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] block">
                  PROBABLE ROOT CAUSES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProblem.possibleCauses.map((cause, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-[#0F172A] shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FF6B35] mt-1.5 flex-shrink-0" />
                      <span className="leading-snug font-medium">{cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Inspection */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border-l-4 border-l-[#FF6B35] border border-slate-200 space-y-1 shadow-sm">
                <div className="text-[11px] font-mono uppercase font-bold text-[#FF6B35]">
                  RECOMMENDED SHOP INSPECTION:
                </div>
                <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed font-medium">
                  {activeProblem.recommendedInspection}
                </p>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onSelectProblem(activeProblem.symptom)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-orange-glow transition-all active:scale-95"
                >
                  <span>GET YOUR AC CHECKED →</span>
                </button>
                <span className="text-xs text-slate-500 font-mono text-center sm:text-right">
                  Fast 15-min dual-gauge pressure inspection
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
