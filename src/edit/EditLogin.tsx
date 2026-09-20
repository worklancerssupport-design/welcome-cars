import { useState, type FormEvent } from "react";
import { ShieldCheck } from "lucide-react";

interface EditLoginProps {
    onLogin: (username: string, password: string) => Promise<boolean>;
    error: string | null;
}

export default function EditLogin({ onLogin, error }: EditLoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await onLogin(username, password);
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-bgLight px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white border border-brand-borderLight rounded-2xl shadow-clean-md p-8"
            >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-obsidian mb-6 mx-auto">
                    <ShieldCheck className="w-6 h-6 text-brand-orange" strokeWidth={2.5} />
                </div>

                <h1 className="font-display text-2xl font-bold text-brand-textDark text-center mb-1">
                    Edit Console
                </h1>
                <p className="text-sm text-brand-textMuted text-center mb-8">
                    Sign in to manage site content
                </p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            required
                            className="w-full px-4 py-3 bg-white border border-brand-borderLight rounded-lg text-sm text-brand-textDark placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide text-brand-textMuted mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="w-full px-4 py-3 bg-white border border-brand-borderLight rounded-lg text-sm text-brand-textDark placeholder:text-brand-textMuted focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                        />
                    </div>
                </div>

                {error && (
                    <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white text-sm font-semibold rounded-lg shadow-orange-glow hover:bg-brand-orangeHover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? "Signing in..." : "Sign in"}
                </button>
            </form>
        </div>
    );
}
