import React from "react";
import { Navigation } from "lucide-react";
import OWNER_DATA from "../data/owner.json";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-brand-obsidian">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Content — second on mobile, first on desktop */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-10">

            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-400/80 mb-5">
                {OWNER_DATA.locationSection.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                {OWNER_DATA.locationSection.title}
              </h2>
              <p className="mt-5 text-base text-slate-400 leading-relaxed">
                {OWNER_DATA.locationSection.description}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
                Workshop Address
              </p>
              <p className="text-base text-slate-200 leading-relaxed">
                Old No: 58, New No: 55,<br />
                Anna Nagar Colony (100 Feet Road),<br />
                Near SRP Tools, Tharamani,<br />
                Chennai, Tamil Nadu 600041
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-500 mb-3">
                Operating Hours
              </p>
              <p className="text-base text-slate-200 tabular-nums">
                {OWNER_DATA.workingHours} · {OWNER_DATA.workingDays}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={OWNER_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>{OWNER_DATA.locationSection.ctaLabel}</span>
              </a>
            </div>

          </div>

          {/* Map — first on mobile, second on desktop */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <iframe
              src={OWNER_DATA.googleMapsEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Welcome Car A/C Service location"
              className="w-full h-[360px] md:h-[500px] rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
