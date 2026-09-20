import React from "react";
import { ArrowRight } from "lucide-react";

interface IntroSectionProps {
  onOpenBooking: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-brand-bgLight">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow — single use of blue as the "specialist/precise" thematic */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-600 mb-6">
          Our Specialization
        </p>

        {/* The positioning statement — one H2, no badge competing with it */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textDark leading-[1.08] tracking-tight">
          Car A/C is all we do.
        </h2>

        {/* One supporting paragraph — explains why this matters */}
        <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A dedicated car A/C workshop in Tharamani, Chennai. We do not service
          engines, change oil, handle brakes, or work on tyres. Every tool,
          gauge, and scan tool here is for one job: getting your cabin vents to
          deliver verified ice-cold air.
        </p>

        {/* Boundary list — quiet, single line of muted text. No orange decoration, no line-through gimmicks. */}
        <p className="mt-10 text-sm text-slate-500">
          No engines &nbsp;·&nbsp; No oil & filters &nbsp;·&nbsp; No tyres & brakes
          &nbsp;·&nbsp; No bodywork &nbsp;·&nbsp; No general mechanical work
        </p>

        {/* Single CTA — orange used once in this section, reserved for action */}
        <div className="mt-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors"
          >
            <span>Book a Car A/C Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
