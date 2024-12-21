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
import { TokenDTO } from 'model/dto/TokenDTO'
import { CreateUserDTO } from 'model/dto/CreateUserDTO'
import { UpdateUserDTO } from 'model/dto/UpdateUserDTO'
import { User } from 'model/User'

@Controller('users')
export class UserController {
  @Get('')
  getUser(@Query() query: TokenDTO): User {
    console.log(`GetUser: ${query.token}`)
    throw NotImplementedException
  }

  @Post('')
  createUser(@Body() dto: CreateUserDTO): User {
    console.log(`CreateUser: ${JSON.stringify(dto, undefined, 2)}`)
    throw NotImplementedException
  }

  @Put('')
  updateUser(@Query() query: TokenDTO, @Body() dto: UpdateUserDTO): User {
    console.log(`UpdateUser: ${query.token}`)
    console.log(JSON.stringify(dto, undefined, 2))
    throw NotImplementedException
  }

  @Delete('')
  DeleteUser(@Query() query: TokenDTO): User {
    console.log(`DeleteUser: ${query.token}`)
    throw NotImplementedException
  }
}
