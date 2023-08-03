import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatreservationService } from './seatreservation.service';
import { CreateSeatreservationDto } from './dto/create-seatreservation.dto';
import { UpdateSeatreservationDto } from './dto/update-seatreservation.dto';

@Controller('seatreservation')
export class SeatreservationController {
  constructor(private readonly seatreservationService: SeatreservationService) {}

  @Post()
  create(@Body() createSeatreservationDto: CreateSeatreservationDto) {
    return this.seatreservationService.create(createSeatreservationDto);
  }

  @Get()
  findAll() {
    return this.seatreservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatreservationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatreservationDto: UpdateSeatreservationDto) {
    return this.seatreservationService.update(+id, updateSeatreservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatreservationService.remove(+id);
  }
}
