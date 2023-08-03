import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { UsersModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seat]),
    UsersModule,
    JwtModule.register({
      secret: 'SECRET_KET',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [SeatsController],
  providers: [SeatsService],
})
export class SeatsModule {}
