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
import { UpdateTaskDTO } from 'model/dto/UpdateTaskDTO'
import { Task } from 'model/Task'
import { User } from 'model/User'

@Controller('tasks')
export class TaskController {
  @Get(':id')
  getTask(@Param('id') id: string): Task {
    console.log(`GetTask: ${id}`)
    throw NotImplementedException
  }

  @Post('')
  createTask(@Body() dto: CreateTaskDTO): User {
    console.log(`CreateTask: ${JSON.stringify(dto, undefined, 2)}`)
    throw NotImplementedException
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() dto: UpdateTaskDTO): User {
    console.log(`UpdateTask: ${id}`)
    console.log(JSON.stringify(dto, undefined, 2))
    throw NotImplementedException
  }

  @Delete(':id')
  DeleteTask(@Param('id') id: string, @Query('token') token: string): User {
    console.log(`DeleteTask: ${id}`)
    console.log(`token: ${token}`)
    throw NotImplementedException
  }
}
