import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useCaseStudies } from "./hooks/useCaseStudies";
import type { WorkCaseItem } from "../data/types";
import EditActionBar from "./EditActionBar";

interface CaseCardProps {
    item: WorkCaseItem;
    expanded: boolean;
    onToggle: () => void;
    onUpdate: (patch: Partial<WorkCaseItem>) => void;
    onRemove: () => void;
}

function CaseCard({ item, expanded, onToggle, onUpdate, onRemove }: CaseCardProps) {
    const updateStat = (key: keyof WorkCaseItem["stats"], value: string) => {
        onUpdate({ stats: { ...item.stats, [key]: value } });
    };

    return (
        <div className="bg-white border border-brand-borderLight rounded-xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-brand-bgLight transition-colors"
            >
                <span className="font-mono text-xs font-bold text-brand-orange tracking-wider">{item.number}</span>
                <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-brand-textDark truncate">{item.title}</div>
                    <div className="text-xs text-brand-textMuted truncate">{item.vehicle}</div>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-brand-bgMuted text-brand-textMuted rounded">
                    {item.category}
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
                                value={item.id}
                                onChange={(e) => onUpdate({ id: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Number</label>
                            <input
                                type="text"
                                value={item.number}
                                onChange={(e) => onUpdate({ number: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Title</label>
                            <input
                                type="text"
                                value={item.title}
                                onChange={(e) => onUpdate({ title: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm font-semibold text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Vehicle</label>
                            <input
                                type="text"
                                value={item.vehicle}
                                onChange={(e) => onUpdate({ vehicle: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Category</label>
                            <input
                                type="text"
                                value={item.category}
                                onChange={(e) => onUpdate({ category: e.target.value })}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                            />
                        </div>
                    </div>

                    <div className="border-t border-brand-borderLight pt-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-textMuted mb-3">Stats</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Initial Temp</label>
                                <input
                                    type="text"
                                    value={item.stats.initialTemp}
                                    onChange={(e) => updateStat("initialTemp", e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Final Temp</label>
                                <input
                                    type="text"
                                    value={item.stats.finalTemp}
                                    onChange={(e) => updateStat("finalTemp", e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Duration</label>
                                <input
                                    type="text"
                                    value={item.stats.duration}
                                    onChange={(e) => updateStat("duration", e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Pressure Delta</label>
                                <input
                                    type="text"
                                    value={item.stats.pressureDelta}
                                    onChange={(e) => updateStat("pressureDelta", e.target.value)}
                                    className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Issue</label>
                            <textarea
                                value={item.issue}
                                onChange={(e) => onUpdate({ issue: e.target.value })}
                                rows={2}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Diagnostic</label>
                            <textarea
                                value={item.diagnostic}
                                onChange={(e) => onUpdate({ diagnostic: e.target.value })}
                                rows={2}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Solution</label>
                            <textarea
                                value={item.solution}
                                onChange={(e) => onUpdate({ solution: e.target.value })}
                                rows={2}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-1.5">Summary</label>
                            <textarea
                                value={item.summary}
                                onChange={(e) => onUpdate({ summary: e.target.value })}
                                rows={2}
                                className="w-full px-3 py-2 bg-white border border-brand-borderLight rounded-md text-sm text-brand-textDark focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end pt-2 border-t border-brand-borderLight">
                        <button
                            onClick={onRemove}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        >
                            <Trash2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                            Remove case study
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function EditCaseStudiesEditor() {
    const { editData, loading, saving, error, hasChanges, refresh, save, discard, updateEditData } = useCaseStudies();
    const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

    if (loading || !editData) {
        return (
            <div className="flex items-center justify-center py-24">
                <Loader2 className="w-6 h-6 animate-spin text-brand-textMuted" />
            </div>
        );
    }

    const updateItem = (index: number, patch: Partial<WorkCaseItem>) => {
        updateEditData((draft) => { Object.assign(draft[index], patch); });
    };

    const addItem = () => {
        updateEditData((draft) => {
            const nextNum = String(draft.length + 1).padStart(2, "0");
            draft.push({
                id: `case-${Date.now()}`,
                number: nextNum,
                title: "NEW CASE STUDY",
                vehicle: "VEHICLE NAME",
                category: "Category",
                issue: "Customer's reported issue.",
                diagnostic: "Diagnostic findings.",
                solution: "Solution applied.",
                stats: {
                    initialTemp: "0.0°C",
                    finalTemp: "0.0°C",
                    duration: "0 Hours",
                    pressureDelta: "—",
                },
                summary: "Outcome summary.",
            });
        });
        setExpandedIdx(editData.length);
    };

    const removeItem = (index: number) => {
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
                        <h2 className="font-display text-lg font-bold text-brand-textDark">Case Studies</h2>
                        <p className="text-xs text-brand-textMuted mt-0.5">{editData.length} items in <span className="font-mono">src/data/caseStudies.json</span></p>
                    </div>
                    <button
                        onClick={addItem}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-brand-obsidian hover:bg-brand-slateDark rounded-md transition-colors"
                    >
                        <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Add case study
                    </button>
                </div>

                <div className="space-y-2">
                    {editData.map((item, idx) => (
                        <CaseCard
                            key={item.id || idx}
                            item={item}
                            expanded={expandedIdx === idx}
                            onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                            onUpdate={(patch) => updateItem(idx, patch)}
                            onRemove={() => removeItem(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
