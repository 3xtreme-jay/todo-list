import { Injectable } from '@nestjs/common'
import { JwtPayload, sign, verify } from 'jsonwebtoken'

@Injectable()
export class TokenService {
  // TODO: Move to config for varying deployment env
  private readonly algorithm = 'HS256'
  private readonly issuer = 'com.list.todo'

  constructor(private readonly secretKey: string) {}

  encode(userId: number): string {
    if (userId === 0) {
      throw new Error('userId must be a positive integer')
    }

    const payload: JwtPayload = { userId }

    // TODO: Handle expiration
    const token = sign(payload, this.secretKey, {
      algorithm: this.algorithm,
      issuer: this.issuer,
    })
    return token
  }

  decode(token: string): number {
    if (token === '') {
      throw new Error('token must not be empty')
    }

    try {
      const payload = verify(token, this.secretKey, {
        algorithms: [this.algorithm],
        issuer: this.issuer,
        complete: false,
      }) as JwtPayload
      return payload.userId as number
    } catch (error) {
      throw new Error(`Invalid token: ${error}`)
    }
  }
}
