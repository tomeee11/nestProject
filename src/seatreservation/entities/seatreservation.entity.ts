import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SeatReservation {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Reservation, (reservation) => reservation.seatReservation, {
    eager: false,
  })
  reservation: Reservation;

  @ManyToOne(() => Seat, (seat) => seat.seatReservation, { eager: false })
  seat: Seat;
}
