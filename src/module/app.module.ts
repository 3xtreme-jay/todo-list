import { Module } from '@nestjs/common'
import { TaskController } from 'controller/task.controller'
import { UserController } from 'controller/user.controller'

@Module({
  imports: [],
  controllers: [TaskController, UserController],
  providers: [],
})
export class AppModule {}
