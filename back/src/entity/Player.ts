import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Card } from './Card';
import { Game } from './Game';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Game, (game: Game) => game.players)
  game: Game;

  @OneToMany(() => Card, (card: Card) => card.player)
  cards: Card[];
}
