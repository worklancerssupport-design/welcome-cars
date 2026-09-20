import React from "react";
import { User, Phone } from "lucide-react";
import OWNER_DATA from "../data/owner.json";

export const OwnerSection: React.FC = () => {
  return (
    <section id="owner" className="py-24 md:py-32 bg-brand-bgLight">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 lg:gap-x-16 items-start">

          {/* Left column — identity & philosophy */}
          <div className="md:col-span-5 space-y-8">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-600">
              {OWNER_DATA.sectionEyebrow}
            </p>

            <blockquote className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] font-bold text-brand-textDark leading-[1.18] tracking-tight">
              {OWNER_DATA.quote[0]}
              <br />
              <span className="text-slate-400 font-medium">{OWNER_DATA.quote[1]}</span>
            </blockquote>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-11 h-11 rounded-full bg-brand-slateDark flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-sky-400" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-brand-textDark leading-tight">
                  {OWNER_DATA.ownerName}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {OWNER_DATA.designation} · {OWNER_DATA.yearsOfExperience} Car A/C Specialization · {OWNER_DATA.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right column — story & action */}
          <div className="md:col-span-7 md:border-l md:border-slate-200 md:pl-12 lg:pl-16 space-y-6 mt-10 md:mt-0">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {OWNER_DATA.bio[0]}
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {OWNER_DATA.bio[1]}
            </p>

            <div className="pt-4">
              <a
                href={`tel:${OWNER_DATA.phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{OWNER_DATA.ctaLabel}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
