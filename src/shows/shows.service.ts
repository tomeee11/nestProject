import { Injectable, NotFoundException } from '@nestjs/common';
import { Show } from './entities/show.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(Show)
    private showRepository: Repository<Show>,
  ) {}

  findAll(): Promise<Show[]> {
    return this.showRepository.find();
  }

  findOneById(id: number): Promise<Show> {
    console.log(id);
    return this.showRepository.findOne({ where: { id } });
  }

  async create(createShowDto: CreateShowDto): Promise<void> {
    await this.showRepository.save(createShowDto);
  }

  async remove(id: number): Promise<void> {
    await this.showRepository.delete(id);
  }

  async update(id: number, updateShowDto: UpdateShowDto): Promise<void> {
    const existedShow = await this.findOneById(id);
    if (!existedShow) {
      throw new NotFoundException();
    }
    await this.showRepository
      .createQueryBuilder()
      .update(Show)
      .set({
        title: updateShowDto.title,
        description: updateShowDto.description,
        showTime: updateShowDto.showTime,
      })
      .where('id=:id', { id })
      .execute();
  }
}
