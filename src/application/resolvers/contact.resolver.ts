import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ContactResolver {
  @Query(() => String, { name: 'contacts' })
  list(): string {
    return 'hello world!';
  }
}
