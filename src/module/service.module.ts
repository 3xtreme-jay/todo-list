import { Module } from '@nestjs/common'
import { TokenService } from 'service/TokenService'
import { env } from 'process'

@Module({
  imports: [],
  providers: [
    {
      provide: TokenService,
      useFactory: () => {
        const secretKey = env.JWT_SECRET_KEY
        return new TokenService(secretKey)
      },
    },
  ],
  exports: [TokenService],
})
export class ServiceModule {}
