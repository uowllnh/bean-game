import type { Player } from "./player";
import type { Card } from "./card";

export type Phase = "plant1" | "trade" | "harvest" | "plant2" | "draw"; //룰 구조, 단계로 이해

export interface GameState{
    players: Player[];
    deck: Card[]; //뽑을 카드 더미
    discard: []; //버린 카드 더미
    phase: Phase;
    turn: number; //현재 턴 플레이어 인덱스
}