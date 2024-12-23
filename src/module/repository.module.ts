import { Module } from '@nestjs/common'
import { TaskRepository } from 'repository/TaskRepository'
import { UserRepository } from 'repository/UserRepository'

@Module({
  imports: [],
  providers: [TaskRepository, UserRepository],
  exports: [TaskRepository, UserRepository],
})
export class RepositoryModule {}
