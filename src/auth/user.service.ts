import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { User } from './entity/users.entity';
import * as bcrypt from 'bcrypt';
import { CreatePointDto } from 'src/points/dto/create-point.dto';
import { PointsService } from 'src/points/points.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private pointService: PointsService,
  ) {}

  async findOne(options: FindOneOptions<User>): Promise<User | undefined> {
    return await this.userRepository.findOne(options);
  }

  async save(userDTO: UserDTO, createPointDto: CreatePointDto): Promise<User> {
    await this.transformPassword(userDTO);
    console.log(userDTO);
    const user = await this.userRepository.save(userDTO);
    await this.pointService.save(user, createPointDto);
    return await this.userRepository.save(userDTO);
  }

  async transformPassword(user: UserDTO): Promise<void> {
    user.password = await bcrypt.hash(user.password, 10);
    return Promise.resolve();
    //Promise.resolve 값이 존재할 경우 값을 리턴, 없을 경우 object 리턴
  }

  findAll() {
    return this.userRepository.find();
  }
}
