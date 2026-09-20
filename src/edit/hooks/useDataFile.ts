import { useState, useCallback, useEffect } from "react";
import { fetchFileFromGitHub, saveFileToGitHub } from "../lib/github";

export interface EditHook<T> {
    originalData: T | null;
    editData: T | null;
    sha: string;
    loading: boolean;
    saving: boolean;
    error: string | null;
    hasChanges: boolean;
    refresh: () => void;
    save: () => Promise<void>;
    discard: () => void;
    updateEditData: (updater: (draft: T) => void) => void;
}

export function useDataFile<T>(filePath: string, commitLabel: string): EditHook<T> {
    const [originalData, setOriginalData] = useState<T | null>(null);
    const [editData, setEditData] = useState<T | null>(null);
    const [sha, setSha] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const { content, sha: fileSha } = await fetchFileFromGitHub(filePath);
            const parsed = JSON.parse(content) as T;
            setOriginalData(parsed);
            setEditData(structuredClone(parsed));
            setSha(fileSha);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load");
        } finally {
            setLoading(false);
        }
    }, [filePath]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const hasChanges = JSON.stringify(originalData) !== JSON.stringify(editData);

    const save = useCallback(async () => {
        if (!editData) return;
        setSaving(true);
        setError(null);
        try {
            const { newSha } = await saveFileToGitHub(
                filePath,
                JSON.stringify(editData, null, 4),
                sha,
                commitLabel
            );
            setOriginalData(structuredClone(editData));
            setSha(newSha);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save");
        } finally {
            setSaving(false);
        }
    }, [editData, sha, filePath, commitLabel]);

    const discard = useCallback(() => {
        setEditData(structuredClone(originalData));
    }, [originalData]);

    const updateEditData = useCallback((updater: (draft: T) => void) => {
        setEditData((prev) => {
            if (!prev) return prev;
            const draft = structuredClone(prev);
            updater(draft);
            return draft;
        });
    }, []);

    return {
        originalData,
        editData,
        sha,
        loading,
        saving,
        error,
        hasChanges,
        refresh: fetchData,
        save,
        discard,
        updateEditData,
    };
}
