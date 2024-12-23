import { Module } from '@nestjs/common'
import { TaskController } from 'controller/task.controller'
import { UserController } from 'controller/user.controller'
import { ServiceModule } from './service.module'

@Module({
  imports: [ServiceModule],
  controllers: [TaskController, UserController],
  providers: [],
})
export class AppModule {}
