import React, { useState } from "react";
import { X, Phone, MessageSquare, Wrench, ShieldCheck } from "lucide-react";
import { AC_PROBLEMS } from "../config/business";
import AC_SERVICES from "../data/services.json";
import OWNER_DATA from "../data/owner.json";
import { ServiceItem } from "../data/types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedProblem?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = "",
  preselectedProblem = ""
}) => {
  const services = AC_SERVICES as ServiceItem[];
  const [carModel, setCarModel] = useState("");
  const [selectedService, setSelectedService] = useState(preselectedService || services[0].title);
  const [selectedProblem, setSelectedProblem] = useState(preselectedProblem);
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello ${OWNER_DATA.businessName}, I would like to book a Car A/C Inspection/Service.
Vehicle: ${carModel || "Not specified"}
Service Required: ${selectedService}
Observed Issue: ${selectedProblem || "General Checkup"}
Preferred Date: ${preferredDate || "Earliest available"}
Additional Notes: ${notes || "None"}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_DATA.whatsappNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111827]/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-clean-lg text-[#111827] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#64748B] hover:text-[#111827] p-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2 text-[#FF6B35] text-xs font-mono tracking-wider uppercase mb-1.5 font-bold">
          <Wrench className="w-3.5 h-3.5" />
          <span>WELCOME CAR A/C SERVICE</span>
        </div>

        <h2 id="booking-modal-title" className="text-2xl font-bold font-display text-[#111827] mb-1">
          Book A/C Diagnosis & Service
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B] mb-6">
          Schedule an inspection with our A/C specialists. We test system pressures, refrigerant levels, and electrical components.
        </p>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-1.5">
              Car Make & Model
            </label>
            <input
              type="text"
              placeholder="e.g. Hyundai Creta, Honda City, Swift..."
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3.5 py-2.5 text-sm text-[#111827] placeholder-[#64748B] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Service Type
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#FF6B35]"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-1.5">
                Observed Symptom
              </label>
              <select
                value={selectedProblem}
                onChange={(e) => setSelectedProblem(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#FF6B35]"
              >
                <option value="">Select symptom (Optional)</option>
                {AC_PROBLEMS.map((p) => (
                  <option key={p.id} value={p.symptom}>
                    {p.symptom}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-1.5">
              Preferred Date / Time
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#FF6B35]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-1.5">
              Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Describe cooling issues or previous gas top-ups..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3.5 py-2 text-sm text-[#111827] placeholder-[#64748B] focus:outline-none focus:border-[#FF6B35] resize-none"
            />
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-[#FF6B35] hover:bg-[#E55A27] text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs shadow-clean-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm on WhatsApp</span>
            </button>

            <a
              href={`tel:${OWNER_DATA.phoneNumber}`}
              className="w-full flex items-center justify-center space-x-2 bg-[#F8FAFC] hover:bg-slate-100 text-[#111827] border border-[#E2E8F0] font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF6B35]" />
              <span>Call Instead: {OWNER_DATA.phoneNumber}</span>
            </a>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-center space-x-2 text-[11px] text-[#64748B]">
          <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
          <span>No commitment • Direct master technician response</span>
        </div>
      </div>
    </div>
  );
};
