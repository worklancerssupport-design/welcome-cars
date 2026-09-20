import { Loader2 } from "lucide-react";
import { useOwner, type OwnerData } from "./hooks/useOwner";
import EditActionBar from "./EditActionBar";

function TextField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
    return (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
            />
        </div>
    );
}

function TextArea({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; rows?: number }) {
    return (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
            />
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="bg-white border border-brand-borderLight rounded-xl p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-textDark mb-4 pb-3 border-b border-brand-borderLight">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
        </section>
    );
}

export default function EditOwnerEditor() {
    const { editData, loading, saving, error, hasChanges, refresh, save, discard, updateEditData } = useOwner();

    if (loading || !editData) {
        return (
            <div className="flex items-center justify-center py-24">
                <Loader2 className="w-6 h-6 animate-spin text-brand-textMuted" />
            </div>
        );
    }

    const set = (patch: Partial<OwnerData>) => updateEditData((draft) => Object.assign(draft, patch));
    const setQuote = (idx: number, v: string) => updateEditData((draft) => { draft.quote[idx] = v; });
    const setBio = (idx: number, v: string) => updateEditData((draft) => { draft.bio[idx] = v; });
    const setLoc = (patch: Partial<OwnerData["locationSection"]>) => updateEditData((draft) => Object.assign(draft.locationSection, patch));

    return (
        <div className="bg-brand-bgLight min-h-full">
            <EditActionBar
                hasChanges={hasChanges}
                saving={saving}
                loading={loading}
                onRefresh={refresh}
                onDiscard={discard}
                onSave={save}
            />

            {error && (
                <div className="max-w-5xl mx-auto px-6 pt-4">
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
                </div>
            )}

            <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
                <Section title="Profile">
                    <TextField label="Business Name" value={editData.businessName} onChange={(v) => set({ businessName: v })} />
                    <TextField label="Owner Name" value={editData.ownerName} onChange={(v) => set({ ownerName: v })} />
                    <TextField label="Designation" value={editData.designation} onChange={(v) => set({ designation: v })} />
                    <TextField label="Years of Experience" value={editData.yearsOfExperience} onChange={(v) => set({ yearsOfExperience: v })} />
                    <TextField label="Location" value={editData.location} onChange={(v) => set({ location: v })} />
                    <TextField label="Section Eyebrow" value={editData.sectionEyebrow} onChange={(v) => set({ sectionEyebrow: v })} />
                    <TextField label="CTA Label" value={editData.ctaLabel} onChange={(v) => set({ ctaLabel: v })} />
                </Section>

                <Section title="Quote">
                    <TextField label="Quote — Line 1" value={editData.quote[0]} onChange={(v) => setQuote(0, v)} />
                    <TextField label="Quote — Line 2" value={editData.quote[1]} onChange={(v) => setQuote(1, v)} />
                    <div className="md:col-span-2">
                        <TextArea label="Bio — Line 1" value={editData.bio[0]} onChange={(v) => setBio(0, v)} rows={3} />
                    </div>
                    <div className="md:col-span-2">
                        <TextArea label="Bio — Line 2" value={editData.bio[1]} onChange={(v) => setBio(1, v)} rows={3} />
                    </div>
                </Section>

                <Section title="Contact">
                    <TextField label="Phone Number" value={editData.phoneNumber} onChange={(v) => set({ phoneNumber: v })} />
                    <TextField label="WhatsApp Number" value={editData.whatsappNumber} onChange={(v) => set({ whatsappNumber: v })} />
                </Section>

                <Section title="Address">
                    <div className="md:col-span-2">
                        <TextArea label="Full Address" value={editData.fullAddress} onChange={(v) => set({ fullAddress: v })} rows={2} />
                    </div>
                    <TextField label="Area" value={editData.area} onChange={(v) => set({ area: v })} />
                    <TextField label="Landmark" value={editData.landmark} onChange={(v) => set({ landmark: v })} />
                    <TextField label="City" value={editData.city} onChange={(v) => set({ city: v })} />
                    <TextField label="State" value={editData.state} onChange={(v) => set({ state: v })} />
                    <TextField label="Pincode" value={editData.pincode} onChange={(v) => set({ pincode: v })} />
                </Section>

                <Section title="Google Maps">
                    <div className="md:col-span-2">
                        <TextField label="Maps URL" value={editData.googleMapsUrl} onChange={(v) => set({ googleMapsUrl: v })} />
                    </div>
                    <div className="md:col-span-2">
                        <TextField label="Maps Embed URL" value={editData.googleMapsEmbedUrl} onChange={(v) => set({ googleMapsEmbedUrl: v })} />
                    </div>
                </Section>

                <Section title="Working Hours">
                    <TextField label="Hours" value={editData.workingHours} onChange={(v) => set({ workingHours: v })} />
                    <TextField label="Days" value={editData.workingDays} onChange={(v) => set({ workingDays: v })} />
                </Section>

                <Section title="Location Section (Public)">
                    <TextField label="Eyebrow" value={editData.locationSection.eyebrow} onChange={(v) => setLoc({ eyebrow: v })} />
                    <TextField label="CTA Label" value={editData.locationSection.ctaLabel} onChange={(v) => setLoc({ ctaLabel: v })} />
                    <div className="md:col-span-2">
                        <TextField label="Title" value={editData.locationSection.title} onChange={(v) => setLoc({ title: v })} />
                    </div>
                    <div className="md:col-span-2">
                        <TextArea label="Description" value={editData.locationSection.description} onChange={(v) => setLoc({ description: v })} rows={2} />
                    </div>
                </Section>
            </div>
        </div>
    );
}
