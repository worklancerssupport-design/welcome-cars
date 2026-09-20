import React, { useEffect, useRef, useState } from "react";

interface ComponentNode {
  id: string;
  name: string;
  stage: string;
  temp: string;
  pressure: string;
  color: string;
  x: number;
  y: number;
}

const NODES: ComponentNode[] = [
  { id: "compressor", name: "COMPRESSOR", stage: "High-Pressure Gas Pump", temp: "75°C - 85°C", pressure: "180 - 230 PSI", color: "#f97316", x: 180, y: 220 },
  { id: "condenser", name: "CONDENSER", stage: "Heat Dissipation Unit", temp: "45°C - 55°C", pressure: "175 - 220 PSI", color: "#eab308", x: 100, y: 110 },
  { id: "expansion", name: "EXPANSION VALVE", stage: "Pressure Metering Orifice", temp: "2°C - 5°C", pressure: "28 - 35 PSI", color: "#06b6d4", x: 360, y: 110 },
  { id: "evaporator", name: "EVAPORATOR", stage: "Cabin Heat Exchanger", temp: "1°C - 4°C", pressure: "25 - 32 PSI", color: "#00f0ff", x: 470, y: 190 },
  { id: "cabin", name: "CABIN VENTS", stage: "Cold Air Discharge", temp: "4°C - 8°C (Ideal)", pressure: "Atmospheric", color: "#38bdf8", x: 570, y: 250 },
];

export const HeroACVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<ComponentNode>(NODES[0]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set virtual resolution
    canvas.width = 680;
    canvas.height = 360;

    // Define thermodynamic path points (scaled to 680x360)
    // Path 1: Compressor -> Condenser (Hot Gas)
    // Path 2: Condenser -> Expansion Valve (Liquid)
    // Path 3: Expansion Valve -> Evaporator (Cold Liquid/Mist)
    // Path 4: Evaporator -> Compressor (Low Pressure Return)
    // Cabin airflow: Evaporator -> Cabin Vents
    
    interface Particle {
      progress: number;
      speed: number;
      path: "refrigerant" | "airflow";
      offset: number;
    }

    const particles: Particle[] = [];
    const totalRefParticles = 45;
    for (let i = 0; i < totalRefParticles; i++) {
      particles.push({
        progress: i / totalRefParticles,
        speed: 0.0035,
        path: "refrigerant",
        offset: (Math.random() - 0.5) * 4
      });
    }

    const totalAirParticles = 25;
    for (let i = 0; i < totalAirParticles; i++) {
      particles.push({
        progress: Math.random(),
        speed: 0.006,
        path: "airflow",
        offset: (Math.random() - 0.5) * 18
      });
    }

    const getRefrigerantPoint = (t: number): { x: number; y: number; phase: "hot" | "warm" | "cold" | "return" } => {
      // 4 Segments in cyclic loop [0 -> 1]
      if (t < 0.25) {
        // Compressor (180, 220) to Condenser (100, 110)
        const p = t / 0.25;
        return {
          x: 180 + (100 - 180) * p,
          y: 220 + (110 - 220) * p,
          phase: "hot"
        };
      } else if (t < 0.5) {
        // Condenser (100, 110) to Expansion (360, 110)
        const p = (t - 0.25) / 0.25;
        return {
          x: 100 + (360 - 100) * p,
          y: 110,
          phase: "warm"
        };
      } else if (t < 0.75) {
        // Expansion (360, 110) to Evaporator (470, 190)
        const p = (t - 0.5) / 0.25;
        return {
          x: 360 + (470 - 360) * p,
          y: 110 + (190 - 110) * p,
          phase: "cold"
        };
      } else {
        // Evaporator (470, 190) back to Compressor (180, 220)
        const p = (t - 0.75) / 0.25;
        // curves slightly downward
        const cx = 320;
        const cy = 290;
        const x = (1 - p) * (1 - p) * 470 + 2 * (1 - p) * p * cx + p * p * 180;
        const y = (1 - p) * (1 - p) * 190 + 2 * (1 - p) * p * cy + p * p * 220;
        return {
          x,
          y,
          phase: "return"
        };
      }
    };

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Refrigerant particles
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        pt.progress += pt.speed;
        if (pt.progress > 1) pt.progress = 0;

        if (pt.path === "refrigerant") {
          const coord = getRefrigerantPoint(pt.progress);
          ctx.save();
          let color = "#00f0ff";
          let size = 2.4;
          let glow = 8;

          if (coord.phase === "hot") {
            color = "#f97316"; // Hot vapor
            size = 2.8;
          } else if (coord.phase === "warm") {
            color = "#0284c7"; // High pressure liquid
            size = 2.2;
          } else if (coord.phase === "cold") {
            color = "#00f0ff"; // Sub-zero aerosol
            size = 3.2;
            glow = 12;
          } else {
            color = "#38bdf8"; // Low pressure cool return vapor
            size = 2.4;
          }

          ctx.shadowBlur = glow;
          ctx.shadowColor = color;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(coord.x, coord.y + pt.offset, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else if (pt.path === "airflow") {
          // Cabin cold airflow: from Evaporator (470, 190) into Cabin (570, 250)
          const p = pt.progress;
          const startX = 480;
          const startY = 195;
          const endX = 640;
          const endY = 240 + pt.offset * 1.5;

          const currentX = startX + (endX - startX) * p;
          const currentY = startY + (endY - startY) * p + Math.sin(time * 0.05 + p * 5) * 4;
          const alpha = p < 0.2 ? p / 0.2 : (1 - p);

          ctx.save();
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha * 0.6})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(0, 240, 255, 0.4)";
          ctx.beginPath();
          ctx.arc(currentX, currentY, 1.8 + p * 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReducedMotion]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-b from-[#0e131c] to-[#0a0d13] border border-cyan-500/20 p-3 sm:p-5 shadow-2xl overflow-hidden group">
      {/* Visual Header Status Badge */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-cyan-400 font-semibold tracking-wider uppercase text-[11px]">
            THERMODYNAMIC CAR AC CYCLE • ACTIVE
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#f97316]"></span> High Side Gas
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span> Low Side Chilled
          </span>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="relative w-full aspect-[680/360] max-h-[380px] select-none">
        {/* SVG Base Schematic */}
        <svg
          viewBox="0 0 680 360"
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="highPressureGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="lowPressureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="cabinAirGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Car Chassis Subtle Outline Silhouette */}
          <path
            d="M 50,180 L 140,110 L 300,105 L 420,70 L 590,70 L 640,160 L 645,260 L 60,260 Z"
            fill="none"
            stroke="#1f293d"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          {/* Dashboard separator */}
          <path
            d="M 440,75 L 440,260"
            stroke="#334155"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="opacity-30"
          />
          <text x="448" y="92" fill="#64748b" fontSize="10" fontFamily="monospace" letterSpacing="1">
            CABIN FIREWALL
          </text>
          <text x="80" y="92" fill="#64748b" fontSize="10" fontFamily="monospace" letterSpacing="1">
            ENGINE BAY
          </text>

          {/* Refrigerant Lines (Connecting Pipes) */}
          {/* Compressor to Condenser (High Pressure Gas Line) */}
          <path
            d="M 180,220 L 100,110"
            stroke="url(#highPressureGrad)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            className="opacity-60"
          />
          {/* Condenser to Expansion Valve (High Pressure Liquid Line) */}
          <path
            d="M 100,110 L 360,110"
            stroke="#0284c7"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="opacity-60"
          />
          {/* Expansion Valve to Evaporator (Low Pressure Cold Mixture) */}
          <path
            d="M 360,110 L 470,190"
            stroke="url(#lowPressureGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Evaporator Return to Compressor (Suction Line) */}
          <path
            d="M 470,190 Q 320,290 180,220"
            stroke="#0284c7"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            className="opacity-50"
          />

          {/* Cabin Airflow Cones */}
          <polygon
            points="480,185 640,165 650,265 480,215"
            fill="url(#cabinAirGrad)"
            className="opacity-70 pointer-events-none"
          />

          {/* Component Glyphs */}
          {/* Condenser Radiator Grid */}
          <g transform="translate(85, 90)">
            <rect width="30" height="40" rx="3" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
            <line x1="90" y1="98" x2="110" y2="98" stroke="#64748b" strokeWidth="1" />
            <line x1="90" y1="105" x2="110" y2="105" stroke="#64748b" strokeWidth="1" />
            <line x1="90" y1="112" x2="110" y2="112" stroke="#64748b" strokeWidth="1" />
            <line x1="90" y1="119" x2="110" y2="119" stroke="#64748b" strokeWidth="1" />
          </g>

          {/* Compressor Mechanical Unit */}
          <g transform="translate(155, 195)">
            <rect width="50" height="50" rx="6" fill="#1a2232" stroke="#f97316" strokeWidth="2" />
            <circle cx="25" cy="25" r="16" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="25" cy="25" r="6" fill="#f97316" />
          </g>

          {/* Expansion Valve */}
          <g transform="translate(345, 95)">
            <polygon points="345,95 375,110 345,125" fill="#06b6d4" stroke="#e2e8f0" strokeWidth="1" />
            <polygon points="375,95 345,110 375,125" fill="#00f0ff" stroke="#e2e8f0" strokeWidth="1" />
          </g>

          {/* Evaporator Core */}
          <g transform="translate(450, 165)">
            <rect width="40" height="50" rx="4" fill="#0f172a" stroke="#00f0ff" strokeWidth="2" />
            <line x1="458" y1="175" x2="482" y2="175" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="458" y1="185" x2="482" y2="185" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="458" y1="195" x2="482" y2="195" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="458" y1="205" x2="482" y2="205" stroke="#38bdf8" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Live Canvas Particle Overlay */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* Interactive Clickable Nodes */}
        {NODES.map((node) => {
          const isSelected = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              style={{
                left: `${(node.x / 680) * 100}%`,
                top: `${(node.y / 360) * 100}%`,
                transform: "translate(-50%, -50%)"
              }}
              className={`absolute group/node z-20 flex flex-col items-center focus:outline-none transition-transform ${
                isSelected ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? "border-2 border-white shadow-cyan-intense ring-4 ring-cyan-500/30"
                    : "border border-slate-600 hover:border-cyan-400"
                }`}
                style={{ backgroundColor: node.color }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950"></div>
              </div>
              <span
                className={`mt-1 text-[10px] sm:text-xs font-mono font-bold tracking-tight px-1.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                  isSelected
                    ? "bg-cyan-950 text-cyan-300 border border-cyan-400"
                    : "bg-[#0b0e14]/90 text-slate-300 border border-slate-800 group-hover/node:text-white"
                }`}
              >
                {node.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Box */}
      <div className="mt-3 sm:mt-4 p-3.5 bg-[#0b0e14] border border-slate-800 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: activeNode.color }}
          ></div>
          <div>
            <span className="font-bold text-white tracking-wide uppercase font-display mr-2">
              {activeNode.name}
            </span>
            <span className="text-slate-400 font-mono text-[11px] block sm:inline">
              {activeNode.stage}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 font-mono text-[11px] w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
          <div>
            <span className="text-slate-500 uppercase mr-1">TEMP:</span>
            <span className="text-cyan-400 font-semibold">{activeNode.temp}</span>
          </div>
          <div>
            <span className="text-slate-500 uppercase mr-1">PRESSURE:</span>
            <span className="text-amber-400 font-semibold">{activeNode.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
