import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsController } from './shows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { UsersModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Show]),
    UsersModule,
    JwtModule.register({
      secret: process.env.DATABASE_SECRET_KEY,
      signOptions: { expiresIn: '300s' },
    }),
  ],

  controllers: [ShowsController],
  providers: [ShowsService],
})
export class ShowsModule {}
