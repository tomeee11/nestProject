import { PartialType } from '@nestjs/mapped-types';
import { CreateShowDto } from './create-show.dto';
import { IsString } from 'class-validator';

export class UpdateShowDto extends PartialType(CreateShowDto) {
  @IsString()
  title: string;
  @IsString()
  description: string;
  showTime: Date;
}
