import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './Player';
import { Card } from './Card';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Player, (player: Player) => player.game)
  players: Player[];

  @OneToMany(() => Card, (card: Card) => card.game)
  cards: Card[];
}
