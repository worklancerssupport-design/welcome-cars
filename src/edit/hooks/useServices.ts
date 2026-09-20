import { useDataFile, type EditHook } from "./useDataFile";
import type { ServiceItem } from "../../data/types";

export function useServices(): EditHook<ServiceItem[]> {
    return useDataFile<ServiceItem[]>("src/data/services.json", "Update services via edit panel");
}
