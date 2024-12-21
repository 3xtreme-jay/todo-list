import { IsJWT, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class IdDTO {
  @IsString()
  @IsNotEmpty()
  id: string
}
