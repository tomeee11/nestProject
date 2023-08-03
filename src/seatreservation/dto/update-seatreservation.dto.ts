import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatreservationDto } from './create-seatreservation.dto';

export class UpdateSeatreservationDto extends PartialType(CreateSeatreservationDto) {}
