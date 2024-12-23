import { IsNotEmpty, IsNumber, Max } from 'class-validator'

export class IdDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number
}
