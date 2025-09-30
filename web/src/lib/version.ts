import { readable } from "svelte/store";
import type { Optional } from "./types/generic";

type VersionResponse = {
    commit: string;
    branch: string;
    remote: string;
    version: string;
}

export const version = readable<Optional<VersionResponse>>(undefined);
