import { Injectable } from '@nestjs/common'
import { User as PrismaUser } from '@prisma/client'
import { User } from 'model/User'
import { PrismaService } from 'service/PrismaService'

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  convertToModel(user: PrismaUser): User {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
    }
  }

  async find(id: number): Promise<User> {
    const user = await this.prismaService.user.findFirst({ where: { id } })
    return this.convertToModel(user)
  }

  async insert(email: string, password: string, name: string): Promise<User> {
    // TODO: hash password
    const user = await this.prismaService.user.create({
      data: {
        email,
        password_hash: password,
        name,
      },
    })
    return this.convertToModel(user)
  }

  async update(id: number, name: string): Promise<User> {
    const user = await this.prismaService.user.update({
      where: { id, deleted_at: null },
      data: { name },
    })
    return this.convertToModel(user)
  }

  async delete(id: number): Promise<User> {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { deleted_at: new Date() },
    })
    return this.convertToModel(user)
  }
}
