import { ValidateUser } from '@domain/auth/actions/validate-user.action';
import { User } from '@domain/user/models/user';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private validateUser: ValidateUser) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    return this.validateUser.handle({ email, password });
  }
}
