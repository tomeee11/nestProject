import { Point } from 'src/points/entities/point.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['nickname'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column({ default: 'user' })
  roles: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Point, (point) => point.user, { eager: true })
  point: Point;

  @OneToMany(() => Reservation, (reservation) => reservation.user, {
    eager: true,
  })
  reservation: Reservation;
}
