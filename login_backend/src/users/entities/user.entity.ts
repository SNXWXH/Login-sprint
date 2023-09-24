import { Column, Entity } from 'typeorm';
import { SuperEntity } from '../../db/super.entity';

@Entity({ name: 'User' })
export class User extends SuperEntity<User> {
  @Column({ length: 128, unique: true })
  email: string;

  @Column()
  passwd: string;
}
