import { Module } from '@nestjs/common';
import { ContactResolver } from './resolvers/contact.resolver';

@Module({
  providers: [ContactResolver],
})
export class ApplicationModule {}
