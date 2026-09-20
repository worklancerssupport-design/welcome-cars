import React, { useState } from "react";
import { ArrowRight, Stethoscope } from "lucide-react";
import { AC_PROBLEMS, ProblemItem } from "../config/business";

interface ProblemsSectionProps {
  onSelectProblem: (problemName: string) => void;
}

const urgencyStyle: Record<string, string> = {
  Immediate: "text-sky-700 font-semibold",
  High: "text-sky-600 font-medium",
  Moderate: "text-sky-500/80 font-normal",
};

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onSelectProblem }) => {
  const [selectedId, setSelectedId] = useState<string>(AC_PROBLEMS[0].id);

  const activeProblem = AC_PROBLEMS.find((p) => p.id === selectedId) || AC_PROBLEMS[0];

  return (
    <section id="problems" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600 mb-5">
            Symptom Checker
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textDark leading-[1.08] tracking-tight">
            Car A/C not cooling?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Pick the symptom you're seeing. We'll list the probable causes and
            the inspection we recommend — no guessing, no top-up cans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: 6 symptom buttons */}
          <div className="lg:col-span-5 space-y-2">
            {AC_PROBLEMS.map((prob: ProblemItem) => {
              const isSelected = prob.id === selectedId;
              return (
                <button
                  key={prob.id}
                  onClick={() => setSelectedId(prob.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-colors flex items-start justify-between gap-4 border-l-2 ${
                    isSelected
                      ? "bg-brand-slateDark text-white border-l-sky-400"
                      : "bg-white hover:bg-slate-50 text-brand-textDark border-l-transparent border border-slate-200"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span className="font-display text-base sm:text-lg font-semibold leading-snug">
                        {prob.symptom}
                      </span>
                      <span className={`text-[10px] tracking-[0.18em] uppercase ${isSelected ? "text-sky-300" : urgencyStyle[prob.urgency]}`}>
                        {prob.urgency}
                      </span>
                    </div>
                    <p className={`mt-1.5 text-sm truncate ${isSelected ? "text-white/60" : "text-slate-500"}`}>
                      {prob.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail of selected problem */}
          <div className="lg:col-span-7 bg-brand-bgLight border border-slate-200 rounded-2xl p-6 sm:p-8">

            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Specialist Assessment</span>
              </span>
              <span className={`text-xs tracking-[0.18em] uppercase ${urgencyStyle[activeProblem.urgency]}`}>
                Urgency: {activeProblem.urgency}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-textDark leading-tight">
              {activeProblem.symptom}
            </h3>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {activeProblem.shortDesc}
            </p>

            <div className="mt-7">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
                Probable Root Causes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProblem.possibleCauses.map((cause, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 text-sm text-slate-700"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                    <span className="leading-snug">{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-5 rounded-lg bg-sky-50 border border-sky-200">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-sky-700 mb-2">
                Recommended Shop Inspection
              </p>
              <p className="text-sm text-slate-800 leading-relaxed">
                {activeProblem.recommendedInspection}
              </p>
            </div>

            <div className="mt-7">
              <button
                onClick={() => onSelectProblem(activeProblem.symptom)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors"
              >
                <span>Get My A/C Checked</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
