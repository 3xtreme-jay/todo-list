import { Injectable } from '@nestjs/common'
import { UserRepository } from 'repository/UserRepository'
import { TokenService } from './TokenService'
import { User } from 'model/User'

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
  ) {}

  async getUser(token: string): Promise<User | undefined> {
    const userId = this.tokenService.decode(token)
    return this.userRepository.find(userId)
  }

  async createUser(
    email: string,
    password: string,
    name: string,
  ): Promise<User> {
    // TODO: hash password
    const user = await this.userRepository.insert(email, password, name)
    const token = this.tokenService.encode(user.id)
    return { ...user, token }
  }

  async updateUser(token: string, name: string): Promise<User> {
    const userId = this.tokenService.decode(token)
    return this.userRepository.update(userId, name)
  }

  async deleteUser(token: string): Promise<User> {
    const userId = this.tokenService.decode(token)
    return this.userRepository.delete(userId)
  }
}
