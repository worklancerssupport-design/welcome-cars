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
