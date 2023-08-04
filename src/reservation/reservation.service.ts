import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Show } from 'src/shows/entities/show.entity';
import { User } from 'src/auth/entity/users.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}
  async create(id: Show, createReservationDto: CreateReservationDto) {
    return await this.reservationRepository.save({
      show: id,
    });
  }

  // findAll() {
  //   return `This action returns all reservation`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} reservation`;
  // }

  async update(
    user: User,
    id: Show,
    updateReservationDto: UpdateReservationDto,
  ) {
    await this.reservationRepository
      .createQueryBuilder()
      .update(Reservation)
      .set({ isCanceled: updateReservationDto.IsCanceled, user: user })
      .where('id = :id', { id })
      .execute();
  }

  // remove(id: number) {
  //   return `This action removes a #${id} reservation`;
  // }
}
