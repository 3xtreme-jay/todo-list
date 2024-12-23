import { Module } from '@nestjs/common'
import { TokenService } from 'service/TokenService'
import { UserService } from 'service/UserService'
import { RepositoryModule } from './repository.module'
import { env } from 'process'

@Module({
  imports: [RepositoryModule],
  providers: [
    {
      provide: TokenService,
      useFactory: () => {
        const secretKey = env.JWT_SECRET_KEY
        return new TokenService(secretKey)
      },
    },
    UserService,
  ],
  exports: [TokenService, UserService],
})
export class ServiceModule {}
