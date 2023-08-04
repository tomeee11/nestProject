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
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Show } from 'src/shows/entities/show.entity';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { Roles } from 'src/auth/deco/role.decorator';
import { Role } from 'src/auth/enum/roles.enum';
import { RolesGuard } from 'src/auth/security/role.guard';
import { GetUser } from 'src/auth/deco/get-.user.decorator';
import { User } from 'src/auth/entity/users.entity';
@Controller('reservation')
@UseGuards(AuthGuard, RolesGuard)
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post('/:id')
  @Roles(Role.Admin)
  create(
    @Param() id: Show,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    return this.reservationService.create(id, createReservationDto);
  }

  // @Get()
  // findAll() {
  //   return this.reservationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reservationService.findOne(+id);
  // }

  @Patch(':id')
  @Roles(Role.User)
  update(
    @GetUser() user: User,
    @Param('id') id: Show,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.update(user, id, updateReservationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reservationService.remove(+id);
  // }
}
