import { GQLAuthGuard } from '@application/guards/gql-auth.guard';
import { LoginUserInput } from '@application/inputs/auth/login-user.input';
import { User } from '@application/models/user.model';
import { LoginResponse } from '@application/outputs/login-response.output';
import { Login } from '@domain/auth/actions/login.action';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class AuthResolver {
  constructor(private loginService: Login) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GQLAuthGuard)
  async login(@Args('data') data: LoginUserInput, @Context() context) {
    const access_token = await this.loginService.handle(context.user);
    return {
      access_token,
      user: context.user,
    };
  }
}
