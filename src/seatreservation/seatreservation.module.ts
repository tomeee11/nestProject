import { Module } from '@nestjs/common';
import { SeatreservationService } from './seatreservation.service';
import { SeatreservationController } from './seatreservation.controller';

@Module({
  controllers: [SeatreservationController],
  providers: [SeatreservationService]
})
export class SeatreservationModule {}
