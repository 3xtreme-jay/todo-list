import { Module } from '@nestjs/common'
import { PrismaService } from 'service/PrismaService'

@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DbModule {}
