import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class IdDTO {
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  id: number
}
