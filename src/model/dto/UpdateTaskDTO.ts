import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'
import { TaskStatus } from 'model/Task'

export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(20)
  title: string

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(100)
  description: string

  @IsEnum(TaskStatus, { message: "Status doesn't belong to TaskStatus enum" })
  @IsOptional()
  @IsNotEmpty()
  status: TaskStatus
}
