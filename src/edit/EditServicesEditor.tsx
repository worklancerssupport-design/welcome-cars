import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useServices } from "./hooks/useServices";
import type { ServiceItem } from "../data/types";
import EditActionBar from "./EditActionBar";

interface ServiceCardProps {
    service: ServiceItem;
    expanded: boolean;
    onToggle: () => void;
    onUpdate: (patch: Partial<ServiceItem>) => void;
    onRemove: () => void;
}

function ServiceCard({ service, expanded, onToggle, onUpdate, onRemove }: ServiceCardProps) {
    return (
        <div className="bg-white border border-brand-borderLight rounded-xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-brand-bgLight transition-colors"
            >
                <span className="font-mono text-xs font-bold text-brand-orange tracking-wider">{service.number}</span>
                <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-brand-textDark truncate">{service.title}</div>
                    <div className="text-xs text-brand-textMuted truncate">{service.subtitle}</div>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-brand-bgMuted text-brand-textMuted rounded">
                    {service.tag}
                </span>
                {expanded ? (
                    <ChevronUp className="w-4 h-4 text-brand-textMuted" strokeWidth={2.5} />
                ) : (
                    <ChevronDown className="w-4 h-4 text-brand-textMuted" strokeWidth={2.5} />
                )}
            </button>

            {expanded && (
                <div className="border-t border-brand-borderLight p-5 space-y-4 bg-brand-bgLight/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">ID</label>
                            <input
                                type="text"
                                value={service.id}
                                onChange={(e) => onUpdate({ id: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Number</label>
                            <input
                                type="text"
                                value={service.number}
                                onChange={(e) => onUpdate({ number: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Title</label>
                            <input
                                type="text"
                                value={service.title}
                                onChange={(e) => onUpdate({ title: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm font-semibold text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Tag</label>
                            <input
                                type="text"
                                value={service.tag}
                                onChange={(e) => onUpdate({ tag: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Subtitle</label>
                        <input
                            type="text"
                            value={service.subtitle}
                            onChange={(e) => onUpdate({ subtitle: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Description</label>
                        <textarea
                            value={service.description}
                            onChange={(e) => onUpdate({ description: e.target.value })}
                            rows={2}
                            className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">
                            Highlights <span className="text-brand-textMuted/70 normal-case font-normal">(one per line)</span>
                        </label>
                        <textarea
                            value={service.highlights.join("\n")}
                            onChange={(e) => onUpdate({ highlights: e.target.value.split("\n").filter((h) => h.trim() !== "") })}
                            rows={3}
                            className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                        />
                    </div>

                    <div className="flex justify-end pt-2 border-t border-brand-borderLight">
                        <button
                            onClick={onRemove}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                            <Trash2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                            Remove service
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function EditServicesEditor() {
    const { editData, loading, saving, error, hasChanges, refresh, save, discard, updateEditData } = useServices();
    const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

    if (loading || !editData) {
        return (
            <div className="flex items-center justify-center py-24">
                <Loader2 className="w-6 h-6 animate-spin text-brand-textMuted" />
            </div>
        );
    }

    const updateService = (index: number, patch: Partial<ServiceItem>) => {
        updateEditData((draft) => { Object.assign(draft[index], patch); });
    };

    const addService = () => {
        updateEditData((draft) => {
            const nextNum = String(draft.length + 1).padStart(2, "0");
            draft.push({
                id: `ac-service-${Date.now()}`,
                number: nextNum,
                title: "NEW SERVICE",
                subtitle: "Short subtitle",
                description: "Description of the service.",
                highlights: ["Highlight one"],
                tag: "Tag",
            });
        });
        setExpandedIdx(editData.length);
    };

    const removeService = (index: number) => {
        updateEditData((draft) => { draft.splice(index, 1); });
        if (expandedIdx === index) setExpandedIdx(null);
    };

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

            <div className="max-w-5xl mx-auto px-6 py-8 space-y-3">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h2 className="font-display text-lg font-bold text-brand-textDark">Services</h2>
                        <p className="text-xs text-brand-textMuted mt-0.5">{editData.length} items in <span className="font-mono">src/data/services.json</span></p>
                    </div>
                    <button
                        onClick={addService}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-obsidian hover:bg-brand-slateDark rounded-md transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Add service
                    </button>
                </div>

                <div className="space-y-2">
                    {editData.map((service, idx) => (
                        <ServiceCard
                            key={service.id || idx}
                            service={service}
                            expanded={expandedIdx === idx}
                            onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                            onUpdate={(patch) => updateService(idx, patch)}
                            onRemove={() => removeService(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
