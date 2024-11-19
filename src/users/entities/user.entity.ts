import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from 'src/posts/entities/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image: string;

  @Column()
  age: number;

  @OneToMany(() => Post, (post) => post.id)
  posts: Post[];
}
