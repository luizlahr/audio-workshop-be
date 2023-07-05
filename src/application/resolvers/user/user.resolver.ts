import { IsPublic } from '@application/decorators/is-public-decorator';
import { JwtAuthGuard } from '@application/guards/jwt-auth.guard';
import { CreateUserInput } from '@application/inputs/user/create-user.input';
import { User } from '@application/models/user.model';
import { CreateUser } from '@domain/user/actions/create-user.action';
import { ListUsers } from '@domain/user/actions/list-users.action';
import { ReadUser } from '@domain/user/actions/read-user.action';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@UseGuards(JwtAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readUser: ReadUser,
    private createUser: CreateUser,
    private listUsers: ListUsers,
  ) {}

  @Query(() => User, { name: 'user' })
  async read(@Args('userId') userId: string) {
    return this.readUser.handle(userId);
  }

  @Query(() => [User], { name: 'users' })
  async list() {
    return this.listUsers.handle();
  }

  // @UseGuards(JwtAuthGuard)
  @IsPublic()
  @Mutation(() => User, { name: 'createUser' })
  create(@Args('data') data: CreateUserInput) {
    return this.createUser.handle(data);
  }
}
