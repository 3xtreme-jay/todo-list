import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string

  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(8)
  @MaxLength(20)
  password: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string
}
