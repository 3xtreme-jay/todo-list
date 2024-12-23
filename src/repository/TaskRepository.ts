import { Injectable } from '@nestjs/common'
import { Task as PrismaTask } from '@prisma/client'
import { Task, TaskStatus } from 'model/Task'
import { PrismaService } from 'service/PrismaService'

@Injectable()
export class TaskRepository {
  constructor(private readonly prismaService: PrismaService) {}

  convertToModel(task: PrismaTask): Task {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status as TaskStatus,
      createdAt: task.created_at,
      updatedAt: task.updated_at,
      deletedAt: task.deleted_at,
    }
  }

  async find(id: number): Promise<Task> {
    const task = await this.prismaService.task.findFirst({ where: { id } })
    return this.convertToModel(task)
  }

  async insert(
    title: string,
    description: string,
    userId: number,
  ): Promise<Task> {
    const task = await this.prismaService.task.create({
      data: {
        title,
        description,
        user_id: userId,
        status: 'OPEN',
      },
    })
    return this.convertToModel(task)
  }

  async update(
    id: number,
    title?: string,
    description?: string,
    status?: TaskStatus,
  ): Promise<Task> {
    const task = await this.prismaService.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
      },
    })
    return this.convertToModel(task)
  }

  async delete(id: number): Promise<Task> {
    const task = await this.prismaService.task.delete({ where: { id } })
    return this.convertToModel(task)
  }
}
