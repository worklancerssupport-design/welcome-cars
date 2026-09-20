import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const EditPage = lazy(() => import("./edit/EditPage"));

function HomePage() {
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
            <Header onOpenBooking={() => handleOpenBooking()} />

            <main>
                <Hero onOpenBooking={() => handleOpenBooking()} />
                <IntroSection onOpenBooking={() => handleOpenBooking()} />
                <ServicesSection onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle, "")} />
                <InteractiveAnatomySection />
                <ProblemsSection onSelectProblem={(problemName) => handleOpenBooking("", problemName)} />
                <WorkGallerySection />
                <OwnerSection />
                <LocationSection />
                <FinalCTASection onOpenBooking={() => handleOpenBooking()} />
            </main>

            <Footer />
            <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                preselectedService={preselectedService}
                preselectedProblem={preselectedProblem}
            />
        </div>
    );
}

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/edit"
                    element={
                        <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</div>}>
                            <EditPage />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
