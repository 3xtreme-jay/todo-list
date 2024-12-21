import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CreateTaskDTO } from 'model/dto/CreateTaskDTO'
import { IdDTO } from 'model/dto/IdDTO'
import { TokenDTO } from 'model/dto/TokenDTO'
import { UpdateTaskDTO } from 'model/dto/UpdateTaskDTO'
import { Task } from 'model/Task'
import { User } from 'model/User'

@Controller('tasks')
export class TaskController {
  @Get(':id')
  getTask(@Param() params: IdDTO): Task {
    console.log(`GetTask: ${params.id}`)
    throw NotImplementedException
  }

  @Post('')
  createTask(@Body() dto: CreateTaskDTO): User {
    console.log(`CreateTask: ${JSON.stringify(dto, undefined, 2)}`)
    throw NotImplementedException
  }

  @Put(':id')
  updateTask(
    @Param() params: IdDTO,
    @Query() query: TokenDTO,
    @Body() dto: UpdateTaskDTO,
  ): User {
    console.log(`UpdateTask: ${params.id}`)
    console.log(`token: ${query.token}`)
    console.log(JSON.stringify(dto, undefined, 2))
    throw NotImplementedException
  }

  @Delete(':id')
  DeleteTask(@Param() params: IdDTO, @Query() query: TokenDTO): User {
    console.log(`DeleteTask: ${params.id}`)
    console.log(`token: ${query.token}`)
    throw NotImplementedException
  }
}
