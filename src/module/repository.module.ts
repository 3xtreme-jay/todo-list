import { Module } from '@nestjs/common'
import { TaskRepository } from 'repository/TaskRepository'
import { UserRepository } from 'repository/UserRepository'
import { DbModule } from './db.module'

@Module({
  imports: [DbModule],
  providers: [TaskRepository, UserRepository],
  exports: [TaskRepository, UserRepository],
})
export class RepositoryModule {}
