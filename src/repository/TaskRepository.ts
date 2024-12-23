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
      userId: task.user_id,
      createdAt: task.created_at,
      updatedAt: task.updated_at,
      deletedAt: task.deleted_at,
    }
  }

  async find(id: number): Promise<Task | undefined> {
    const task = await this.prismaService.task.findFirst({ where: { id } })
    return task ? this.convertToModel(task) : undefined
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
        status: TaskStatus.OPEN,
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
      where: { id, deleted_at: null },
      data: {
        title,
        description,
        status,
      },
    })
    return this.convertToModel(task)
  }

  async delete(id: number): Promise<Task> {
    const targetTask = await this.prismaService.task.findFirst({
      where: { id, deleted_at: null },
    })
    if (!targetTask) {
      throw new Error('Invalid task to delete')
    }

    const task = await this.prismaService.task.update({
      where: { id },
      data: { deleted_at: new Date() },
    })
    return this.convertToModel(task)
  }
}
