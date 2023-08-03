import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @Matches(/^[a-zA-Z0-9]*$/, { message: 'password only english and number' })
  password: string;
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  nickname: string;

  roles: string;
}
