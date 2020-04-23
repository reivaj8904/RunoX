import { Card } from "../models/card.model";
import { Player } from "../models/player.model";

export class AfterTakeCardEvent {
  constructor(public readonly card: Card, public readonly player: Player) {}
}
