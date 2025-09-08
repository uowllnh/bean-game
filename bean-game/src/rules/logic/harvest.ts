import type { GameState } from "../domain/gameState"

export function harvest(state:GameState, playerId: string): GameState {
    const player = state.players.find(p=> p.id === playerId);
    if (!player) throw new Error("플레이어 없음");

    
    
}