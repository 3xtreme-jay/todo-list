import { Injectable } from '@nestjs/common'
import { TaskRepository } from 'repository/TaskRepository'
import { TokenService } from './TokenService'
import { Task, TaskStatus } from 'model/Task'

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly tokenService: TokenService,
  ) {}

  private async validateTaskOwnership(
    id: number,
    token: string,
  ): Promise<void> {
    const task = await this.taskRepository.find(id)
    if (!task) {
      throw new Error(`No task with id ${id}`)
    }

    const userId = this.tokenService.decode(token)
    if (task.userId !== userId) {
      throw new Error('This task does not belong to the proper user')
    }
  }

  async getTask(id: number, token: string): Promise<Task | undefined> {
    const task = await this.taskRepository.find(id)
    if (!task) {
      return undefined
    }

    const userId = this.tokenService.decode(token)
    if (task.userId !== userId) {
      throw new Error('This task does not belong to the proper user')
    }

    return task
  }

  async createTask(
    title: string,
    description: string,
    token: string,
  ): Promise<Task> {
    const userId = this.tokenService.decode(token)
    return this.taskRepository.insert(title, description, userId)
  }

  async updateTask(
    id: number,
    token: string,
    title?: string,
    description?: string,
    status?: TaskStatus,
  ): Promise<Task> {
    await this.validateTaskOwnership(id, token)
    return this.taskRepository.update(id, title, description, status)
  }

  async deleteTask(id: number, token: string): Promise<Task> {
    await this.validateTaskOwnership(id, token)
    return this.taskRepository.delete(id)
  }
}
