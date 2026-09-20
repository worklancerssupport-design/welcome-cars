import React from "react";
import { Phone, MessageSquare, Navigation, Calendar } from "lucide-react";
import OWNER_DATA from "../data/owner.json";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Quick mobile contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0F19]/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        <a
          href={`tel:${OWNER_DATA.phoneNumber}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 rounded-lg text-white active:bg-white/20 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FF6B35] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Mani</span>
        </a>

        <a
          href={`https://wa.me/${OWNER_DATA.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/95 rounded-lg text-[#0F172A] font-bold active:bg-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#FF6B35] mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
        </a>

        <a
          href={OWNER_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 rounded-lg text-white active:bg-white/20 transition-colors"
        >
          <Navigation className="w-4 h-4 text-sky-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#FF6B35] rounded-lg text-white font-bold animate-orange-glow active:bg-[#E55A27] transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-bold">Book A/C </span>
        </button>
      </div>
    </aside>
  );
};
