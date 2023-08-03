import { Show } from 'src/shows/entities/show.entity';
import { SeatReservation } from '../../seatreservation/entities/seatreservation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seatNumber: number;

  @Column()
  grade: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => SeatReservation, (seatReservation) => seatReservation.seat, {
    eager: true,
  })
  seatReservation: SeatReservation;

  @ManyToOne(() => Show, (show) => show.seat, { eager: false })
  show: Show;
}
