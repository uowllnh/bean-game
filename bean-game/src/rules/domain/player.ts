import type { Card } from "./card";
import type { Field } from "./field";

export interface Player {

id: string;
name: string;
hand: Card[] //실제 들고 있는 카드 리스트
fields: Field[] //밭에 심은 콩
coins: number; //현재 보유 코인
}