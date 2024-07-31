import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './Player';
import { Game } from './Game';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  suit: string;

  @Column()
  rank: string;

  @ManyToOne(() => Game, (game: Game) => game.cards)
  game: Game;

  @ManyToOne(() => Player, (player) => player.cards)
  player: Player;
}
