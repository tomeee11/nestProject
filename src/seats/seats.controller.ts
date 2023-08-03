import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Show } from 'src/shows/entities/show.entity';
import { RolesGuard } from 'src/auth/security/role.guard';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { Role } from 'src/auth/enum/roles.enum';
import { Roles } from 'src/auth/deco/role.decorator';

@Controller('seats')
@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.Admin)
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post('/:id')
  create(@Param() id: Show, @Body() createSeatDto: CreateSeatDto) {
    return this.seatsService.create(id, createSeatDto);
  }

  @Get()
  findAll() {
    return this.seatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatsService.update(+id, updateSeatDto);
  }

  @Delete(':id')
  remove(@Param() id: number) {
    return this.seatsService.remove(id);
  }
}
