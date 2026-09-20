import React, { useState } from "react";
import { ANATOMY_COMPONENTS, AnatomyComponent } from "../config/business";
import { AlertCircle } from "lucide-react";

export const InteractiveAnatomySection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("compressor");

  const activeComponent = ANATOMY_COMPONENTS.find((c) => c.id === selectedId) || ANATOMY_COMPONENTS[0];

  return (
    <section id="anatomy" className="py-24 md:py-32 bg-brand-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600 mb-5">
            How Car A/C Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textDark leading-[1.08] tracking-tight">
            The five parts of the cooling cycle.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            A car A/C does not create cold air — it continuously absorbs cabin
            heat through the evaporator and expels it through the front
            condenser. Click any component to see its role and failure signs.
          </p>
        </div>

        {/* Schematic on dark slate */}
        <div className="bg-brand-slateDark border border-slate-800 rounded-2xl p-6 sm:p-10 mb-6">

          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Refrigerant Circuit
            </span>
            <span className="text-xs text-white/40">
              Click a component
            </span>
          </div>

          <div className="relative w-full aspect-[680/220] max-h-[280px]">
            <svg viewBox="0 0 680 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* 1. Compressor -> Condenser (Hot) */}
              <path d="M 120,150 L 120,70" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />

              {/* 2. Condenser -> TXV (Cooling liquid) */}
              <path d="M 140,60 L 360,60" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

              {/* 3. TXV -> Evaporator (Chilled) */}
              <path d="M 380,70 L 520,110" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
              <path d="M 380,70 L 520,110" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 6" className="animate-dash-flow" />

              {/* 4. Evaporator -> Compressor (Vapor return) */}
              <path d="M 520,140 Q 340,200 140,160" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />

              {/* Cabin airflow */}
              <path d="M 550,110 C 600,100 630,120 660,130" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" />
              <path d="M 550,130 C 600,130 630,140 660,150" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" />

              {/* Compressor */}
              <g onClick={() => setSelectedId("compressor")} className="cursor-pointer">
                <circle cx="120" cy="160" r="26" fill={selectedId === "compressor" ? "#FF6B35" : "#1E293B"} stroke={selectedId === "compressor" ? "#FFFFFF" : "#475569"} strokeWidth="2.5" />
                <text x="120" y="164" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">01</text>
                <text x="120" y="202" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">COMPRESSOR</text>
              </g>

              {/* Condenser */}
              <g onClick={() => setSelectedId("condenser")} className="cursor-pointer">
                <rect x="100" y="40" width="40" height="30" rx="4" fill={selectedId === "condenser" ? "#FF6B35" : "#1E293B"} stroke={selectedId === "condenser" ? "#FFFFFF" : "#475569"} strokeWidth="2" />
                <text x="120" y="58" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">02</text>
                <text x="120" y="28" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">CONDENSER</text>
              </g>

              {/* TXV */}
              <g onClick={() => setSelectedId("expansion")} className="cursor-pointer">
                <polygon points="360,50 385,70 360,70" fill={selectedId === "expansion" ? "#38BDF8" : "#1E293B"} stroke={selectedId === "expansion" ? "#FFFFFF" : "#475569"} strokeWidth="2" />
                <text x="372" y="66" fill={selectedId === "expansion" ? "#0F172A" : "#FFFFFF"} fontSize="11" fontWeight="bold" textAnchor="middle">03</text>
                <text x="372" y="28" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">TXV VALVE</text>
              </g>

              {/* Evaporator */}
              <g onClick={() => setSelectedId("evaporator")} className="cursor-pointer">
                <rect x="520" y="100" width="40" height="40" rx="6" fill={selectedId === "evaporator" ? "#38BDF8" : "#1E293B"} stroke={selectedId === "evaporator" ? "#FFFFFF" : "#38BDF8"} strokeWidth="2.5" />
                <text x="540" y="124" fill={selectedId === "evaporator" ? "#0F172A" : "#FFFFFF"} fontSize="11" fontWeight="bold" textAnchor="middle">04</text>
                <text x="540" y="160" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">EVAPORATOR</text>
              </g>

              {/* Cabin */}
              <g onClick={() => setSelectedId("cabin")} className="cursor-pointer">
                <rect x="615" y="115" width="40" height="40" rx="4" fill={selectedId === "cabin" ? "#38BDF8" : "#1E293B"} stroke={selectedId === "cabin" ? "#FFFFFF" : "#475569"} strokeWidth="2" />
                <text x="635" y="139" fill={selectedId === "cabin" ? "#0F172A" : "#FFFFFF"} fontSize="11" fontWeight="bold" textAnchor="middle">05</text>
                <text x="635" y="175" fill="#E2E8F0" fontSize="10" fontWeight="600" textAnchor="middle">CABIN</text>
              </g>
            </svg>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            <span className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#FF6B35]" />
              <span>Hot high-pressure gas</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-sky-400" />
              <span>Chilled low-pressure refrigerant</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-0.5 bg-slate-400 border-dashed" style={{borderTop: "1px dashed #94A3B8", height: 0}} />
              <span>Liquid & vapor return</span>
            </span>
          </div>
        </div>

        {/* Component tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {ANATOMY_COMPONENTS.map((comp: AnatomyComponent) => {
            const isSelected = comp.id === selectedId;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`p-4 rounded-xl text-left border transition-colors ${
                  isSelected
                    ? "bg-brand-slateDark text-white border-brand-slateDark"
                    : "bg-white hover:bg-slate-50 text-brand-textDark border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${isSelected ? "text-sky-400" : "text-slate-400"}`}>
                    Stage {comp.stepNumber}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-sky-400" : "bg-slate-300"}`} />
                </div>
                <div className="font-display text-sm font-semibold leading-snug">
                  {comp.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected component detail */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            <div className="md:col-span-4">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600 mb-3">
                {activeComponent.stepNumber} · {activeComponent.state}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-textDark leading-tight">
                {activeComponent.name}
              </h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {activeComponent.shortDescription}
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-brand-bgMuted border border-slate-200">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-2">
                  Thermodynamic Function
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeComponent.technicalRole}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-sky-50 border border-sky-200">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-sky-700 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Failure Signs</span>
                </p>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {activeComponent.commonFailureSign}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
