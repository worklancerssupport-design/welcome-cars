import React from "react";
import { Snowflake, Activity, ShieldCheck, Gauge, Cpu } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      label: "CAR AC SPECIALIST",
      sub: "100% HVAC Dedication",
      icon: Snowflake
    },
    {
      label: "AC DIAGNOSTICS",
      sub: "Dual Gauge & Scanners",
      icon: Activity
    },
    {
      label: "COOLING PROBLEMS",
      sub: "Vent Delta Temperature",
      icon: ShieldCheck
    },
    {
      label: "GAS & LEAK SERVICE",
      sub: "Nitrogen & Electronic Sniffer",
      icon: Gauge
    },
    {
      label: "COMPRESSOR REPAIR",
      sub: "Clutch, Valve & Overhaul",
      icon: Cpu
    }
  ];

  return (
    <div className="bg-[#F6F3EA] border-b border-[#E2DDD0] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2DDD0]">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center space-x-3 ${
                  idx > 0 ? "pt-3 md:pt-0 md:pl-4 lg:pl-6" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E2DDD0] flex items-center justify-center flex-shrink-0 text-[#102A2A] shadow-clean-sm">
                  <Icon className="w-4.5 h-4.5 text-[#E66A4A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102A2A] tracking-wider uppercase font-sans">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#6B7D7D]">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
