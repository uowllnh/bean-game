import type { GameState } from "../domain/gameState"

// 손패 앞장 심기
export function plantFrontCard(state: GameState, playerId: string): GameState {
  const player = state.players.find(p => p.id === playerId);
  if (!player) throw new Error("플레이어 없음");

  const [frontCard, ...rest] = player.hand; // 맨 앞 카드 = frontcard, 나머지 배열 = rest 
  if (!frontCard) throw new Error("심을 카드 없음");

  // 심기 로직 (밭이 비었으면 추가, 다르면 수확 처리 필요)
  const newFields = [...player.fields]; // 복사본 생성 
  newFields[0] = {
    kind: frontCard.kind,
    cards: [...(newFields[0]?.cards ?? []), frontCard],
  };

  const newPlayer = { ...player, hand: rest, fields: newFields };

  return {
    ...state,
    players: state.players.map(p => (p.id === playerId ? newPlayer : p)),
  };
}