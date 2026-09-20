import React, { useState } from "react";
import WORK_CASES from "../data/caseStudies.json";
import { WorkCaseItem } from "../data/types";
import { Car, ShieldCheck } from "lucide-react";

export const WorkGallerySection: React.FC = () => {
  const cases = WORK_CASES as WorkCaseItem[];
  const [selectedCaseId, setSelectedCaseId] = useState<string>(cases[0].id);

  const activeCase = cases.find((c) => c.id === selectedCaseId) || cases[0];

  return (
    <section id="work" className="py-24 md:py-32 bg-brand-obsidian text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-400/80 mb-5">
            Documented Benchmarks
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Real cars. Real numbers.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed">
            Four case studies from the workshop bay — measured vent discharge
            temperatures, service duration, and the validated result.
          </p>
        </div>

        {/* Case selector — compact, sticky on desktop so it stays accessible while reading the featured card below */}
        <div className="lg:sticky lg:top-20 z-10 bg-brand-obsidian pb-5 mb-8 border-b border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {cases.map((item: WorkCaseItem) => {
              const isSelected = item.id === selectedCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`text-left p-4 rounded-xl border-l-2 transition-colors ${
                    isSelected
                      ? "bg-white/[0.06] border-l-sky-400"
                      : "border-l-transparent border border-white/10 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-sm font-semibold tabular-nums ${isSelected ? "text-sky-400" : "text-white/40"}`}>
                      {item.number}
                    </span>
                    <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase truncate ${isSelected ? "text-sky-300/80" : "text-white/40"}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className={`text-[11px] font-medium tracking-[0.12em] uppercase mb-1.5 truncate ${isSelected ? "text-white/70" : "text-white/45"}`}>
                    {item.vehicle}
                  </p>
                  <h4 className={`font-display text-sm font-semibold leading-snug ${isSelected ? "text-white" : "text-white/70"}`}>
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured case study — full width, dominant content */}
        <div className="bg-brand-slateDark border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">

          <div className="flex flex-wrap items-center gap-3 pb-5 mb-6 border-b border-white/10">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Case {activeCase.number}
            </span>
            <span className="text-xs font-medium text-white/30">·</span>
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-sky-400/80">
              {activeCase.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-3">
            <Car className="w-4 h-4" />
            <span>{activeCase.vehicle}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl">
            {activeCase.title}
          </h3>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
                Initial Temp
              </p>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold text-white/85 tabular-nums">
                {activeCase.stats.initialTemp}
              </p>
              <p className="mt-1 text-xs text-white/40">Warm cabin</p>
            </div>

            <div className="p-4 rounded-xl bg-sky-500/[0.08] border border-sky-400/30">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-sky-300/80">
                Final Temp
              </p>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold text-sky-300 tabular-nums">
                {activeCase.stats.finalTemp}
              </p>
              <p className="mt-1 text-xs text-sky-300/70">Ice chill</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
                Service Time
              </p>
              <p className="mt-2 font-display text-lg sm:text-xl font-bold text-white/85 tabular-nums">
                {activeCase.stats.duration}
              </p>
              <p className="mt-1 text-xs text-white/40">Completed</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
                Delta Result
              </p>
              <p className="mt-2 font-display text-base sm:text-lg font-bold text-white/85 tabular-nums leading-tight">
                {activeCase.stats.pressureDelta}
              </p>
              <p className="mt-1 text-xs text-white/40">Validated</p>
            </div>
          </div>

          {/* Narrative breakdown */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
                Reported Symptoms
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                {activeCase.issue}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
                Diagnostic Findings
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                {activeCase.diagnostic}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50 mb-2">
                Technical Solution
              </p>
              <p className="text-sm text-white/85 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10 flex items-start gap-3 text-sm text-white/65">
            <ShieldCheck className="w-4 h-4 text-sky-400/80 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed">{activeCase.summary}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
