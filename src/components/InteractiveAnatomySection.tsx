import React, { useState } from "react";
import { ANATOMY_COMPONENTS, AnatomyComponent } from "../config/business";
import { AlertCircle, Snowflake } from "lucide-react";

export const InteractiveAnatomySection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("compressor");

  const activeComponent = ANATOMY_COMPONENTS.find((c) => c.id === selectedId) || ANATOMY_COMPONENTS[0];

  return (
    <section id="anatomy" className="py-24 md:py-32 bg-[#F1F5F9] border-b border-slate-200 relative overflow-hidden">
      {/* Subtle ambient cooling glow in background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase mb-3 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm">
            <Snowflake className="w-3.5 h-3.5 text-sky-500 animate-spin" style={{ animationDuration: "10s" }} />
            <span>THERMODYNAMIC COOLING CYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0F172A] tracking-tight">
            HOW YOUR CAR AC WORKS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A car AC does not create cold air — it continuously absorbs cabin heat through the evaporator and expels it through the front condenser. Click each stage below to explore the cycle.
          </p>
        </div>

        {/* Blueprint Circuit Schematic on Dark Engineering Slate */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl mb-8 relative overflow-hidden">
          <div className="text-xs font-mono uppercase font-bold text-slate-300 mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span>AUTOMOTIVE REFRIGERANT CIRCUIT SCHEMATIC</span>
            </span>
            <span className="text-sky-400 bg-sky-950/60 border border-sky-400/40 px-3 py-0.5 rounded-full flex items-center space-x-1.5 animate-cool-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              <span>LIVE CLOSED-LOOP THERMODYNAMICS</span>
            </span>
          </div>

          <div className="relative w-full aspect-[680/220] max-h-[270px]">
            <svg viewBox="0 0 680 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hotDischarge" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#FFA07A" />
                </linearGradient>
                <linearGradient id="liquidLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFA07A" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
                <filter id="iceGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Background */}
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* 1. Compressor -> Condenser (High Pressure Hot Vapor) */}
              <path d="M 120,150 L 120,70" stroke="url(#hotDischarge)" strokeWidth="4" strokeLinecap="round" />
              
              {/* 2. Condenser -> TXV (High Pressure Warm Liquid) */}
              <path d="M 140,60 L 360,60" stroke="url(#liquidLine)" strokeWidth="3" strokeLinecap="round" />
              
              {/* 3. TXV -> Evaporator (Low Pressure Ice Mist - Glowing Chilled Line) */}
              <path d="M 380,70 L 520,110" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" filter="url(#iceGlow)" />
              <path d="M 380,70 L 520,110" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />

              {/* 4. Evaporator -> Compressor (Low Pressure Vapor Return) */}
              <path d="M 520,140 Q 340,200 140,160" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />

              {/* Cabin Chilled Airflow Glow Cones */}
              <path d="M 550,110 C 600,100 630,120 660,130" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 3" filter="url(#iceGlow)" />
              <path d="M 550,130 C 600,130 630,140 660,150" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="4 3" filter="url(#iceGlow)" />

              {/* 1. Compressor Node */}
              <g onClick={() => setSelectedId("compressor")} className="cursor-pointer">
                <circle cx="120" cy="160" r="26" fill={selectedId === "compressor" ? "#FF6B35" : "#1E293B"} stroke={selectedId === "compressor" ? "#FFFFFF" : "#475569"} strokeWidth="2.5" />
                <text x="120" y="164" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">01</text>
                <text x="120" y="202" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">COMPRESSOR</text>
              </g>

              {/* 2. Condenser Node */}
              <g onClick={() => setSelectedId("condenser")} className="cursor-pointer">
                <rect x="100" y="40" width="40" height="30" rx="4" fill={selectedId === "condenser" ? "#FF6B35" : "#1E293B"} stroke={selectedId === "condenser" ? "#FFFFFF" : "#475569"} strokeWidth="2" />
                <text x="120" y="58" fill="#FFFFFF" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">02</text>
                <text x="120" y="28" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">CONDENSER</text>
              </g>

              {/* 3. Expansion Valve (TXV) Node */}
              <g onClick={() => setSelectedId("expansion")} className="cursor-pointer">
                <polygon points="360,50 385,60 360,70 385,50 360,60 385,70" fill={selectedId === "expansion" ? "#FF6B35" : "#1E293B"} stroke={selectedId === "expansion" ? "#FFFFFF" : "#475569"} strokeWidth="2" />
                <circle cx="372" cy="60" r="14" fill={selectedId === "expansion" ? "#FF6B35" : "#1E293B"} />
                <text x="372" y="64" fill="#FFFFFF" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">03</text>
                <text x="372" y="28" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">TXV VALVE</text>
              </g>

              {/* 4. Evaporator Core Node with Ice Halo */}
              <g onClick={() => setSelectedId("evaporator")} className="cursor-pointer">
                <rect x="520" y="100" width="40" height="40" rx="6" fill={selectedId === "evaporator" ? "#38BDF8" : "#1E293B"} stroke="#38BDF8" strokeWidth="2.5" filter="url(#iceGlow)" />
                <text x="540" y="124" fill={selectedId === "evaporator" ? "#0F172A" : "#FFFFFF"} fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">04</text>
                <text x="540" y="160" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">EVAPORATOR</text>
              </g>

              {/* Glowing Ice Discharge Indicator */}
              <g filter="url(#iceGlow)">
                <text x="610" y="170" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">CHILLED AIR TO CABIN (4.5°C)</text>
              </g>
            </svg>
          </div>
        </div>

        {/* 4 Interactive Component Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
          {ANATOMY_COMPONENTS.slice(0, 4).map((comp: AnatomyComponent) => {
            const isSelected = comp.id === selectedId;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedId(comp.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                  isSelected
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg ring-2 ring-[#FF6B35]/40"
                    : "bg-white hover:bg-slate-50 text-[#0F172A] border-slate-200/90 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-[#FF6B35]" : "text-slate-500"
                    }`}
                  >
                    STAGE {comp.stepNumber}
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isSelected ? "bg-[#FF6B35] ring-4 ring-[#FF6B35]/25" : "bg-slate-300"
                    }`}
                  />
                </div>
                <div className="text-sm font-bold font-display truncate">
                  {comp.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Component Technical Detail Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-clean-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#FF6B35]">
                {activeComponent.stepNumber} • {activeComponent.state}
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0F172A]">
                {activeComponent.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeComponent.shortDescription}
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 md:pt-0">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                <div className="text-[11px] font-mono font-bold uppercase text-[#0F172A] mb-1">
                  Thermodynamic Function
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeComponent.technicalRole}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFE4D6]/40 border border-[#FFE4D6]">
                <div className="flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase text-[#FF6B35] mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Common Failure Symptoms</span>
                </div>
                <p className="text-xs text-[#0F172A] leading-relaxed font-medium">
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
