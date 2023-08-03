import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './auth/auth.module';
import { TypeOrmConfig } from 'config/typeorm.config';
import { ShowsModule } from './shows/shows.module';
import { ReservationModule } from './reservation/reservation.module';
import { SeatsModule } from './seats/seats.module';
import { SeatreservationModule } from './seatreservation/seatreservation.module';
import { PointsModule } from './points/points.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    // TypeOrmModule.forFeature([User]),
    UsersModule,
    ShowsModule,
    ReservationModule,
    SeatsModule,
    SeatreservationModule,
    PointsModule,
    ConfigModule.forRoot({
      envFilePath: './.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
