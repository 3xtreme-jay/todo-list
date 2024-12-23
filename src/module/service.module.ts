import { Module } from '@nestjs/common'
import { TokenService } from 'service/TokenService'
import { UserService } from 'service/UserService'
import { RepositoryModule } from './repository.module'
import { env } from 'process'
import { TaskService } from 'service/TaskService'

@Module({
  imports: [RepositoryModule],
  providers: [
    TaskService,
    {
      provide: TokenService,
      useFactory: () => {
        const secretKey = env.JWT_SECRET_KEY
        return new TokenService(secretKey)
      },
    },
    UserService,
  ],
  exports: [TaskService, TokenService, UserService],
})
export class ServiceModule {}
