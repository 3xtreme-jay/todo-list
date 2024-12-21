import { IsString, IsOptional, IsNotEmpty, MaxLength } from 'class-validator'

export class UpdateUserDTO {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  name: string
}
