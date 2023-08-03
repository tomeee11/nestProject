import { User } from 'src/auth/entity/users.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Point {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  point: number;

  @Column()
  reason: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.point, { eager: false })
  user: User;

  @ManyToOne(() => Reservation, (reservation) => reservation.point, {
    eager: false,
  })
  reservation: Reservation;
}
