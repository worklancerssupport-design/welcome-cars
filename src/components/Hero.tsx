import React, { useRef, useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Snowflake, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen w-full overflow-hidden flex flex-col justify-between bg-[#0B0F19]"
    >
      {/* 1. CINEMATIC FULL VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/car-ac-poster.svg"
          alt="Car AC Anatomy Flow Fallback"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoFailed ? "opacity-0" : "opacity-100"
          }`}
        />

        {!isReducedMotion && !videoFailed && (
          <video
            ref={videoRef}
            src="/videos/car-ac-anatomy.mp4"
            poster="/images/car-ac-poster.svg"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        )}
      </div>

      {/* 2. COOLING & GLOWING AMBIENT LIGHT EFFECTS */}
      {/* Top dark gradient */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/60 to-transparent z-10 pointer-events-none" />
      
      {/* Directional gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/95 via-[#0B0F19]/80 to-[#0B0F19]/30 z-10 pointer-events-none" />

      {/* Glowing Warm Orange Core Orb */}
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-[#FF6B35]/15 rounded-full blur-[110px] pointer-events-none z-10" />

      {/* Glowing Ice-Cold Cooling Mist Orb on Right */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-[130px] pointer-events-none z-10" />

      {/* Animated Cooling Air Mist Stream across Hero */}
      <div className="absolute inset-x-0 top-1/2 h-36 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent pointer-events-none z-10 animate-mist blur-2xl" />

      {/* Clean Bottom Transition into Titanium Surface #F8FAFC */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/50 to-transparent z-10 pointer-events-none" />

      {/* 3. HERO CONTENT COMPOSITION */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6 text-left">
          
          {/* Top Badges: Specialist Label + Live Sub-Zero Cooling Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] text-[#FFE4D6] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
              <span>CAR AC SPECIALISTS ONLY</span>
            </div>

            {/* Glowing Cooling Badge */}
            <div className="inline-flex items-center space-x-2 bg-sky-950/70 border border-sky-400/50 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-sky-300 backdrop-blur-md animate-cool-glow">
              <Snowflake className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span>SUB-ZERO VENT CHILL: 4°C – 6°C</span>
            </div>
          </div>

          {/* Main H1 & Supporting Heading */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
              {BUSINESS_CONFIG.businessName}
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-slate-100 tracking-wide flex items-center space-x-2">
              <span>CAR AC SERVICE & REPAIR</span>
              <span className="text-xs font-mono font-bold uppercase text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30 px-2.5 py-0.5 rounded">
                CHENNAI
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
            Professional diagnosis, refrigerant leak check, and compressor service dedicated exclusively to your car's air-conditioning system in <strong className="text-white">Tharamani, Chennai</strong>.
          </p>

          {/* Location & Strict Boundary Notice */}
          <div className="bg-[#0F172A]/85 border-l-2 border-[#FF6B35] p-3.5 rounded-r-xl text-xs text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 max-w-xl backdrop-blur-sm border border-slate-700/60 shadow-xl">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
              <span>Near SRP Tools (100Ft Rd), Tharamani, Chennai</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>100% Car AC Only</span>
            </div>
          </div>

          {/* CTA Group with Glowing Primary Button */}
          <div className="pt-2 flex flex-wrap gap-3.5 items-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-lg animate-orange-glow transition-all active:scale-95"
            >
              <span>BOOK AC SERVICE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-semibold px-6 py-4 rounded-lg transition-colors backdrop-blur-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FF6B35]" />
              <span>CALL {BUSINESS_CONFIG.phoneNumber}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white/95 hover:bg-white text-[#0F172A] text-xs sm:text-sm font-bold px-5 py-4 rounded-lg transition-colors shadow-clean-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B35]" />
              <span>WHATSAPP</span>
            </a>
          </div>

        </div>
      </div>

      {/* 4. HERO BOTTOM DETAIL STRIP */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap items-center justify-between text-xs font-bold font-mono tracking-wider text-[#0F172A] pt-4 border-t border-[#0F172A]/20">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
              <span>DUAL GAUGE DIAGNOSIS</span>
            </span>
            <span className="text-[#FF6B35]">•</span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>NITROGEN LEAK HOLDS</span>
            </span>
            <span className="text-[#FF6B35]">•</span>
            <span>COMPRESSOR OVERHAUL</span>
          </div>
          <div className="hidden sm:block text-[11px] text-slate-700 font-semibold font-mono">
            OWNER: {BUSINESS_CONFIG.ownerName.toUpperCase()} • 15+ YEARS SPECIALIZATION
          </div>
        </div>
      </div>
    </section>
  );
};
