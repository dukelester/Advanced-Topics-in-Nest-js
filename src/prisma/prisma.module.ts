import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  controllers:[],
  exports:[PrismaModule]

  
})
export class PrismaModule {}
