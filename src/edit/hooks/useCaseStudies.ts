import { useDataFile, type EditHook } from "./useDataFile";
import type { WorkCaseItem } from "../../data/types";

export function useCaseStudies(): EditHook<WorkCaseItem[]> {
    return useDataFile<WorkCaseItem[]>("src/data/caseStudies.json", "Update case studies via edit panel");
}
