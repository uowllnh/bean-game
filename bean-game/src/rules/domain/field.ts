import type { Card } from "./card";

export interface Field {
    kind: string | null;
    cards: Card[];
}