import React from "react";
import { MapPin, Phone, Clock, Navigation, ExternalLink, Compass } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#0B0F19] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#FF6B35] uppercase bg-[#FF6B35]/10 border border-[#FF6B35]/30 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span>THARAMANI, CHENNAI WORKSHOP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              VISIT WELCOME CAR AC SERVICE
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Convenient drive-in AC diagnostic bays located on 100Feet Road near SRP Tools in Tharamani, Chennai.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5 text-sm p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-black/60 flex items-center justify-center text-[#FF6B35] flex-shrink-0 mt-0.5 border border-slate-700 ring-2 ring-[#FF6B35]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider font-mono">
                    Workshop Address
                  </strong>
                  <span className="text-sm text-slate-200 mt-1 block leading-relaxed font-medium">
                    Old No: 58, New No: 55, Anna Nagar Colony (100Feet Road),<br />
                    <strong className="text-[#FF6B35]">Near SRP Tools</strong>, Tharamani,<br />
                    Chennai, Tamil Nadu - 600041
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-sm p-4 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-black/60 flex items-center justify-center text-[#FF6B35] flex-shrink-0 mt-0.5 border border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider font-mono">
                    Direct Phone Line (Mani)
                  </strong>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
                    className="text-lg font-bold font-mono text-white hover:text-[#FF6B35] transition-colors mt-0.5 block"
                  >
                    +91 {BUSINESS_CONFIG.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 text-sm p-4 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-black/60 flex items-center justify-center text-[#FF6B35] flex-shrink-0 mt-0.5 border border-slate-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block text-xs uppercase tracking-wider font-mono">
                    Operating Hours
                  </strong>
                  <span className="text-sm text-slate-300 font-medium mt-0.5 block">
                    {BUSINESS_CONFIG.workingHours} (Mon – Sat)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Button with Glowing Effect */}
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-bold text-xs uppercase tracking-wider py-4 px-7 rounded-xl animate-orange-glow transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed / Route Card */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-between p-7 sm:p-9 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-[#FF6B35] animate-spin" style={{ animationDuration: "20s" }} />
                <span className="text-xs font-mono uppercase font-bold text-slate-300 tracking-wider">
                  CHENNAI AC SERVICE BAY
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/60 border border-sky-400/40 px-3 py-1 rounded-full">
                NEAR SRP TOOLS
              </span>
            </div>

            <div className="my-8 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-black/60 border border-slate-700 mx-auto flex items-center justify-center text-[#FF6B35] shadow-lg ring-4 ring-[#FF6B35]/20 animate-orange-glow">
                <MapPin className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {BUSINESS_CONFIG.businessName}
              </h3>

              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Tharamani • OMR Corridor • Chennai
              </p>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Drive-in diagnostic bay on 100Feet Road, directly accessible from OMR / SRP Tools junction. Free customer parking & waiting lounge available.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                Landmark: SRP Tools Junction, 100Ft Road
              </span>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-orange-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
