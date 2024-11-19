import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  likes: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
