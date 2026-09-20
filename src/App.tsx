import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/ServicesSection";
import { InteractiveAnatomySection } from "./components/InteractiveAnatomySection";
import { ProblemsSection } from "./components/ProblemsSection";
import { WorkGallerySection } from "./components/WorkGallerySection";
import { OwnerSection } from "./components/OwnerSection";
import { LocationSection } from "./components/LocationSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { BookingModal } from "./components/BookingModal";

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");
  const [preselectedProblem, setPreselectedProblem] = useState("");

  const handleOpenBooking = (service = "", problem = "") => {
    setPreselectedService(service);
    setPreselectedProblem(problem);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#FF6B35] selection:text-white">
      {/* 1. Sleek Header (Glass over video, solid white on scroll) */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 2. Hero Section (Cinematic Fullscreen Video Background) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Intro Section (Crisp Titanium: "CAR AC IS ALL WE DO." Split Composition) */}
        <IntroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Services Section (Deep Dark Automotive Console: Numbered 01 to 08) */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle, "")}
        />

        {/* 5. How AC Works (Technical Automotive Blueprint Schematic) */}
        <InteractiveAnatomySection />

        {/* 6. AC Diagnostics & Symptom Checker (Interactive 6-Symptom Selector) */}
        <ProblemsSection
          onSelectProblem={(problemName) => handleOpenBooking("", problemName)}
        />

        {/* 7. Our Work (Dark Automotive Studio: Case Studies & Interactive Rows) */}
        <WorkGallerySection />

        {/* 8. About / Owner (Warm Editorial Master Technician Profile) */}
        <OwnerSection />

        {/* 9. Location & Workshop Details (Deep Obsidian: Details Left, Route Right) */}
        <LocationSection />

        {/* 10. Final Action CTA (Deep Obsidian Closing Section) */}
        <FinalCTASection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 11. Footer (Deep Obsidian) */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Universal Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedService={preselectedService}
        preselectedProblem={preselectedProblem}
      />
    </div>
  );
};

export default App;
