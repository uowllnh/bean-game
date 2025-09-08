export interface Card {
    id: string;
    kind: "soy" | "Wax" | "Garden" | "Black-eyed" |
    "Red" |  "Blue" | "Stink" | "Coffee" | "Green" | 
    "Cocoa" | "Chili";
    value: number;
}