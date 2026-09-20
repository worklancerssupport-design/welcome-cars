import React from "react";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-brand-bgLight">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600 mb-6">
          Cooling Restoration
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-textDark leading-[1.1] tracking-tight">
          Ready to get your A/C cooling again?
        </h2>

        <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
          Book a precision A/C diagnosis or speak directly with our climate control specialist today.
        </p>

        <div className="mt-10">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors"
          >
            <span>Book A/C Service</span>
          </button>
        </div>

      </div>
    </section>
  );
};
