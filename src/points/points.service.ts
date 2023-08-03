import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Point } from './entities/point.entity';
import { User } from 'src/auth/entity/users.entity';
import { CreatePointDto } from './dto/create-point.dto';

@Injectable()
export class PointsService {
  constructor(
    @InjectRepository(Point)
    private pointRepository: Repository<Point>,
  ) {}

  async save(user: User, createPointDto: CreatePointDto): Promise<void> {
    const { reason } = createPointDto;
    await this.pointRepository.save({
      point: 1000000,
      reason: reason,
      user: user,
    });
  }
}
