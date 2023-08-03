import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from './points.controller';
import { Point } from './entities/point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Point])],
  exports: [PointsService],
  controllers: [PointsController],
  providers: [PointsService],
})
export class PointsModule {}
