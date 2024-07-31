import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  //it is used to generate primary id, when new data inserted.
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  // It is used to mark a specific class property as a table column
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @CreateDateColumn()
  createdon: Date;

  @UpdateDateColumn()
  updatedon: Date;

  @DeleteDateColumn()
  deletedon: Date;
}
