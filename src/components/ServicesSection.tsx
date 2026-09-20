import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import AC_SERVICES from "../data/services.json";
import { ServiceItem } from "../data/types";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = AC_SERVICES as ServiceItem[];
  const [selectedId, setSelectedId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === selectedId) || services[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-obsidian text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-400/80 mb-5">
            Service Menu
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Every car A/C service we offer.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
            Eight focused procedures. Each one done by a specialist who works on
            car A/C systems every day — not a general mechanic.
          </p>
        </div>

        {/* List + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: 8 service rows */}
          <div className="lg:col-span-7">
            {services.map((service: ServiceItem) => {
              const isSelected = service.id === selectedId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`group w-full text-left py-5 px-5 flex items-center justify-between gap-4 transition-colors border-l-2 ${
                    isSelected
                      ? "bg-white/[0.04] border-l-sky-400"
                      : "border-l-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-5 min-w-0">
                    <span
                      className={`text-sm font-semibold tabular-nums pt-0.5 w-6 flex-shrink-0 ${
                        isSelected ? "text-sky-400" : "text-white/30"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-display font-semibold text-base sm:text-lg leading-snug ${
                          isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/45 truncate">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail of selected service */}
          <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-7 sm:p-8 lg:sticky lg:top-28">

            <div className="flex items-baseline justify-between gap-3 pb-5 mb-6 border-b border-white/10">
              <span className="font-display text-2xl font-bold text-white tabular-nums">
                {activeService.number}
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-white/40">
                {activeService.tag}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              {activeService.title}
            </h3>
            <p className="mt-2 text-sm text-sky-400/80 font-medium">
              {activeService.subtitle}
            </p>
            <p className="mt-5 text-base text-white/65 leading-relaxed">
              {activeService.description}
            </p>

            <div className="mt-7 space-y-2.5">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-white/40">
                Included procedures
              </p>
              {activeService.highlights.map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-3 text-sm text-white/75">
                  <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 translate-y-[0.4rem]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onSelectService(activeService.title)}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-6 py-4 rounded-md transition-colors"
            >
              <span>Book This Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
