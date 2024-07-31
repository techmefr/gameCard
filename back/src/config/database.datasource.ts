import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  synchronize: false,
};
export const dataSource = new DataSource(databaseConfig);
