import { Injectable } from '@nestjs/common';
import { CreateSeatreservationDto } from './dto/create-seatreservation.dto';
import { UpdateSeatreservationDto } from './dto/update-seatreservation.dto';

@Injectable()
export class SeatreservationService {
  create(createSeatreservationDto: CreateSeatreservationDto) {
    return 'This action adds a new seatreservation';
  }

  findAll() {
    return `This action returns all seatreservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seatreservation`;
  }

  update(id: number, updateSeatreservationDto: UpdateSeatreservationDto) {
    return `This action updates a #${id} seatreservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} seatreservation`;
  }
}
