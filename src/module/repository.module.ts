import { Module } from '@nestjs/common'
import { UserRepository } from 'repository/UserRepository'

@Module({
  imports: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoryModule {}
