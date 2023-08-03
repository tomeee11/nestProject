import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { Show } from './entities/show.entity';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Roles } from 'src/auth/deco/role.decorator';
import { Role } from 'src/auth/enum/roles.enum';
import { RolesGuard } from 'src/auth/security/role.guard';

@Controller('shows')
@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.Admin)
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}

  @Get()
  findAll(): Promise<Show[]> {
    return this.showsService.findAll();
  }

  @Get('/:id')
  findOneById(@Param('id') id: number): Promise<Show> {
    return this.showsService.findOneById(id);
  }

  @Post()
  create(@Body() createShowDto: CreateShowDto): Promise<void> {
    return this.showsService.create(createShowDto);
  }

  @Delete('/:id')
  remove(@Param() id: number): Promise<void> {
    return this.showsService.remove(id);
  }

  @Put('/:id')
  update(@Param() id: number, @Body() updateShowDto: UpdateShowDto) {
    this.showsService.update(id, updateShowDto);
    return '변경되었습니다.';
  }
}
