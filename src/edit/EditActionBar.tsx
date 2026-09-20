import { RefreshCw, X, Save, Loader2 } from "lucide-react";

interface ActionBarProps {
    hasChanges: boolean;
    saving: boolean;
    loading: boolean;
    onRefresh: () => void;
    onDiscard: () => void;
    onSave: () => void;
}

export default function ActionBar({ hasChanges, saving, loading, onRefresh, onDiscard, onSave }: ActionBarProps) {
    return (
        <div className="sticky top-0 z-10 bg-white border-b border-brand-borderLight">
            <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    {hasChanges ? (
                        <span className="inline-flex items-center gap-1.5 text-brand-orange">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            Unsaved changes
                        </span>
                    ) : (
                        <span className="text-brand-textMuted">All changes saved</span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onRefresh}
                        disabled={loading || saving}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-textMuted hover:text-brand-textDark hover:bg-brand-bgMuted rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <RefreshCw className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Refresh
                    </button>

                    <button
                        onClick={onDiscard}
                        disabled={!hasChanges || saving}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-textMuted hover:text-brand-textDark hover:bg-brand-bgMuted rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <X className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Discard
                    </button>

                    <button
                        onClick={onSave}
                        disabled={!hasChanges || saving}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover rounded-md shadow-orange-glow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>
                                <Loader2 className="w-3.5 h-3.5 animate-spin" strokeWidth={2.5} />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="w-3.5 h-3.5" strokeWidth={2.5} />
                                Save
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
