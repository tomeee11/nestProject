import { User } from 'src/auth/entity/users.entity';
import { SeatReservation } from 'src/seatreservation/entities/seatreservation.entity';
import { Show } from 'src/shows/entities/show.entity';
import { Point } from '../../points/entities/point.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isCanceled: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Point, (point) => point.reservation, { eager: true })
  point: Point;

  @OneToMany(
    () => SeatReservation,
    (seatReservation) => seatReservation.reservation,
    { eager: false },
  )
  seatReservation: SeatReservation;

  @ManyToOne(() => User, (user) => user.reservation, { eager: false })
  user: User;

  @ManyToOne(() => Show, (show) => show.reservation, { eager: false })
  show: Show;
}
