import { Test, TestingModule } from '@nestjs/testing';
import { SeatreservationService } from './seatreservation.service';

describe('SeatreservationService', () => {
  let service: SeatreservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatreservationService],
    }).compile();

    service = module.get<SeatreservationService>(SeatreservationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
