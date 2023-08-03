import { Test, TestingModule } from '@nestjs/testing';
import { SeatreservationController } from './seatreservation.controller';
import { SeatreservationService } from './seatreservation.service';

describe('SeatreservationController', () => {
  let controller: SeatreservationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeatreservationController],
      providers: [SeatreservationService],
    }).compile();

    controller = module.get<SeatreservationController>(SeatreservationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
