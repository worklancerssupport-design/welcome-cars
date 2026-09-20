import { useState } from "react";
import { ArrowLeft, LogOut, Snowflake } from "lucide-react";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import EditLogin from "./EditLogin";
import EditOwnerEditor from "./EditOwnerEditor";
import EditServicesEditor from "./EditServicesEditor";
import EditCaseStudiesEditor from "./EditCaseStudiesEditor";

type Tab = "services" | "caseStudies" | "owner";

const TABS: { id: Tab; label: string; count?: number }[] = [
    { id: "services", label: "Services" },
    { id: "caseStudies", label: "Case Studies" },
    { id: "owner", label: "Owner" },
];

function EditShell() {
    const { isAuthenticated, login, logout, error } = useAuth();
    const [activeTab, setActiveTab] = useState<Tab>("services");

    if (!isAuthenticated) {
        return <EditLogin onLogin={login} error={error} />;
    }

    return (
        <div className="min-h-screen bg-brand-bgLight flex flex-col">
            <header className="bg-brand-obsidian text-white">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                            <Snowflake className="w-4 h-4 text-brand-orange" strokeWidth={2.5} />
                        </div>
                        <div>
                            <div className="font-display text-sm font-bold tracking-tight">Welcome Car A/C</div>
                            <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">Edit Console</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="/"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
                            Back to site
                        </a>
                        <button
                            onClick={logout}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        >
                            <LogOut className="w-3.5 h-3.5" strokeWidth={2.5} />
                            Logout
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="max-w-5xl mx-auto px-6 flex gap-1">
                        {TABS.map((tab) => {
                            const active = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                                        active
                                            ? "text-white"
                                            : "text-white/50 hover:text-white/80"
                                    }`}
                                >
                                    {tab.label}
                                    {active && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {activeTab === "services" && <EditServicesEditor />}
                {activeTab === "caseStudies" && <EditCaseStudiesEditor />}
                {activeTab === "owner" && <EditOwnerEditor />}
            </main>
        </div>
    );
}

export default function EditPage() {
    return (
        <AuthProvider>
            <EditShell />
        </AuthProvider>
    );
}
