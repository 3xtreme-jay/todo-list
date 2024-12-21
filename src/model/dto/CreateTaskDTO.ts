import { IsJWT, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  title: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  description: string

  @IsString()
  @IsNotEmpty()
  @IsJWT()
  token: string
}
