import { useDataFile, type EditHook } from "./useDataFile";

export interface OwnerData {
    businessName: string;
    ownerName: string;
    yearsOfExperience: string;
    designation: string;
    location: string;
    sectionEyebrow: string;
    quote: string[];
    bio: string[];
    ctaLabel: string;
    phoneNumber: string;
    whatsappNumber: string;
    fullAddress: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    workingHours: string;
    workingDays: string;
    locationSection: {
        eyebrow: string;
        title: string;
        description: string;
        ctaLabel: string;
    };
}

export function useOwner(): EditHook<OwnerData> {
    return useDataFile<OwnerData>("src/data/owner.json", "Update owner data via edit panel");
}
