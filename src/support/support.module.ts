import { Global, Module } from '@nestjs/common';
import { PrismaContactRepository } from './db/repositories/contact/prisma-contact.repository';
import { ServicesModule } from './services/services.module';

@Global()
@Module({
  providers: [PrismaContactRepository],
  exports: [PrismaContactRepository, ServicesModule],
  imports: [ServicesModule],
})
export class SupportModule {}
