import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { Repository } from 'typeorm';
import { Show } from 'src/shows/entities/show.entity';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
  ) {}

  async create(id: Show, createSeatDto: CreateSeatDto): Promise<void> {
    const { seatNumber, grade, price } = createSeatDto;
    const seat = await this.seatRepository.findOne({ where: { seatNumber } });
    if (seat) {
      throw new HttpException(
        '해당 좌석은 이미 사용중입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.seatRepository.save({
      seatNumber: seatNumber,
      grade: grade,
      price: price,
      show: id,
    });
  }

  // findAll() {
  //   return `This action returns all seats`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} seat`;
  // }

  // update(id: number, updateSeatDto: UpdateSeatDto) {
  //   return `This action updates a #${id} seat`;
  // }

  // async remove(id: number): Promise<void> {
  //   await this.seatRepository.delete(id);
  // }
}
