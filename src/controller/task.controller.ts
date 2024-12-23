import {
  Body,
  Controller,
  Delete,
  Get,
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
import { TaskService } from 'service/TaskService'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':id')
  async getTask(
    @Param() params: IdDTO,
    @Query() query: TokenDTO,
  ): Promise<Task> {
    const { id } = params
    const { token } = query

    console.log(`GetTask: ${id}`)
    console.log(`token: ${token}`)

    const task = await this.taskService.getTask(id, token)
    if (!task) {
      throw new Error(`No task with id ${id}`)
    }

    return task
  }

  @Post('')
  async createTask(@Body() dto: CreateTaskDTO): Promise<Task> {
    console.log(`CreateTask: ${JSON.stringify(dto, undefined, 2)}`)

    const { title, description, token } = dto
    return this.taskService.createTask(title, description, token)
  }

  @Put(':id')
  async updateTask(
    @Param() params: IdDTO,
    @Query() query: TokenDTO,
    @Body() dto: UpdateTaskDTO,
  ): Promise<Task> {
    console.log(`UpdateTask: ${params.id}`)
    console.log(`token: ${query.token}`)
    console.log(JSON.stringify(dto, undefined, 2))

    const { title, description, status } = dto
    return this.taskService.updateTask(
      params.id,
      query.token,
      title,
      description,
      status,
    )
  }

  @Delete(':id')
  async DeleteTask(
    @Param() params: IdDTO,
    @Query() query: TokenDTO,
  ): Promise<Task> {
    console.log(`DeleteTask: ${params.id}`)
    console.log(`token: ${query.token}`)

    return this.taskService.deleteTask(params.id, query.token)
  }
}
