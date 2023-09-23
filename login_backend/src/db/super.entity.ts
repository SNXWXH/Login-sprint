import { PrimaryGeneratedColumn } from 'typeorm';

export class SuperEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  // @CreateDateColumn()
  // createAt: Date;

  // @UpdateDateColumn()
  // updateAt: Date;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
