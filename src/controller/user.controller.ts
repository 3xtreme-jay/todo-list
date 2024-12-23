import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { TokenDTO } from 'model/dto/TokenDTO'
import { CreateUserDTO } from 'model/dto/CreateUserDTO'
import { UpdateUserDTO } from 'model/dto/UpdateUserDTO'
import { User } from 'model/User'
import { UserService } from 'service/UserService'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUser(@Query() query: TokenDTO): Promise<User> {
    console.log(`GetUser: ${query.token}`)

    return this.userService.getUser(query.token)
  }

  @Post('')
  async createUser(@Body() dto: CreateUserDTO): Promise<User> {
    console.log(`CreateUser: ${JSON.stringify(dto, undefined, 2)}`)

    const { email, password, name } = dto
    return this.userService.createUser(email, password, name)
  }

  @Put('')
  async updateUser(
    @Query() query: TokenDTO,
    @Body() dto: UpdateUserDTO,
  ): Promise<User> {
    console.log(`UpdateUser: ${query.token}`)
    console.log(JSON.stringify(dto, undefined, 2))

    return this.userService.updateUser(query.token, dto.name)
  }

  @Delete('')
  async DeleteUser(@Query() query: TokenDTO): Promise<User> {
    console.log(`DeleteUser: ${query.token}`)

    return this.userService.deleteUser(query.token)
  }
}
