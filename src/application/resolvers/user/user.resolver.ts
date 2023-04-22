import { CreateUserInput } from '@application/inputs/user/create-user.input';
import { User } from '@application/models/user.model';
import { CreateUser } from '@domain/user/actions/create-user.action';
import { ReadUser } from '@domain/user/actions/read-user.action';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class UserResolver {
  constructor(private readUser: ReadUser, private createUser: CreateUser) {}

  @Query(() => User, { name: 'user' })
  async read(@Args('userId') userId: string) {
    return this.readUser.handle(userId);
  }

  @Mutation(() => User, { name: 'createUser' })
  create(@Args('data') data: CreateUserInput) {
    return this.createUser.handle(data);
  }
}
