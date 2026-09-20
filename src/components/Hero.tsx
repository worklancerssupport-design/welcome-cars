import React, { useRef, useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowRight, Snowflake } from "lucide-react";
import OWNER_DATA from "../data/owner.json";

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
      className="relative min-h-[88vh] md:min-h-screen w-full overflow-hidden flex bg-brand-obsidian"
    >
      {/* Background: video with poster fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/car-ac-poster.svg"
          alt=""
          aria-hidden="true"
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
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Single ambient gradient for legibility — keeps the visual budget minimal */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-obsidian via-brand-obsidian/85 to-brand-obsidian/30 z-10 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-obsidian/90 to-transparent z-10 pointer-events-none" />

      {/* Content — single column, hierarchy-driven */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col justify-center">
        <div className="max-w-2xl">

          {/* Signal 1 — The positioning line. The single most important sentence. */}
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70 mb-6">
            Tharamani, Chennai
          </p>

          {/* Signal 2 — The H1. The clearest possible statement of what this is. */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Car A/C.
            <br />
            <span className="text-white/55 font-medium">Nothing else.</span>
          </h1>

          {/* Signal 3 — The trust anchor. One concrete proof point. */}
          <p className="mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
            A dedicated car A/C workshop — diagnosis, gas recharge, leak detection
            and compressor repair. <span className="text-white">15+ years</span> of
            doing exactly this in Chennai.
          </p>

          {/* Signal 4 — Single primary CTA. Orange is reserved here. */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-md transition-colors shadow-orange-glow"
            >
              <span>Book A/C Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${OWNER_DATA.phoneNumber}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm px-4 py-4 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {OWNER_DATA.phoneNumber}</span>
            </a>

            <a
              href={`https://wa.me/${OWNER_DATA.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm px-4 py-4 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Signal 5 — Quiet technical proof. Single blue accent. */}
          <div className="mt-12 inline-flex items-center gap-2 text-xs font-medium text-white/50">
            <Snowflake className="w-3.5 h-3.5 text-sky-400/80" />
            <span>Vents delivered at 4°C – 6°C after service</span>
          </div>

        </div>
      </div>
    </section>
  );
};
