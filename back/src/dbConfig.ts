import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { Card } from './entity/Card';
import { Game } from './entity/Game';
import { Player } from './entity/Player';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Card, Game, Player],
  synchronize: true,
};
