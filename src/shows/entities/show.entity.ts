import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  showTime: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Reservation, (reservation) => reservation.show, {
    eager: true,
  })
  reservation: Reservation;
  @OneToMany(() => Seat, (seat) => seat.show, { eager: true })
  seat: Seat;
}
