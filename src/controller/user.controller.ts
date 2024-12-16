import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CreateUserDTO } from 'model/dto/CreateUserDTO'
import { UpdateUserDTO } from 'model/dto/UpdateUserDTO'
import { User } from 'model/User'

@Controller('users')
export class UserController {
  @Get('')
  getUser(@Query('token') token: string): User {
    console.log(`GetUser: ${token}`)
    throw NotImplementedException
  }

  @Post('')
  createUser(@Body() dto: CreateUserDTO): User {
    console.log(`CreateUser: ${JSON.stringify(dto, undefined, 2)}`)
    throw NotImplementedException
  }

  @Put('')
  updateUser(@Query('token') token: string, @Body() dto: UpdateUserDTO): User {
    console.log(`UpdateUser: ${token}`)
    console.log(JSON.stringify(dto, undefined, 2))
    throw NotImplementedException
  }

  @Delete('')
  DeleteUser(@Query('token') token: string): User {
    console.log(`DeleteUser: ${token}`)
    throw NotImplementedException
  }
}
