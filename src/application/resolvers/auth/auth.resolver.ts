import { IsPublic } from '@application/decorators/is-public-decorator';
import { GQLAuthGuard } from '@application/guards/gql-auth.guard';
import { SignInInput } from '@application/inputs/auth/sign-in.input';
import { User } from '@application/models/user.model';
import { LoginResponse } from '@application/outputs/login-response.output';
import { SignIn } from '@domain/auth/actions/sign-in.action';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

@Resolver(() => User)
export class AuthResolver {
  constructor(private signInService: SignIn) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GQLAuthGuard)
  @IsPublic()
  async signIn(@Args('data') data: SignInInput, @Context() context) {
    const access_token = await this.signInService.handle(context.user);
    return {
      access_token,
      user: context.user,
    };
  }
}
