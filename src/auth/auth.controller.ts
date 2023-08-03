import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { AuthDTO } from './dto/auth.dto';
import { AuthGuard } from './security/auth.guard';
import { GetUser } from './deco/get-.user.decorator';
import { User } from './entity/users.entity';
import { CreatePointDto } from 'src/points/dto/create-point.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async registerAccount(
    @Body(ValidationPipe) userDTO: UserDTO,
    @Body() createPointDto: CreatePointDto,
  ): Promise<any> {
    return await this.authService.registerUser(userDTO, createPointDto);
  }

  @Post('/login')
  async login(
    @Body(ValidationPipe) authDTO: AuthDTO,
  ): Promise<{ accessToken: string }> {
    return await this.authService.validateUser(authDTO);
  }

  @UseGuards(AuthGuard)
  @Get('auth')
  getauth(@GetUser() user: User) {
    return user;
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }
}
