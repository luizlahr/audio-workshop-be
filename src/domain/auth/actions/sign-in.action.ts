import { Injectable } from '@nestjs/common';
import { User } from '@domain/user/models/user';
import { JwtGenerator } from '@domain/common/services/jwt-generator.service';

@Injectable()
export class SignIn {
  constructor(private jwtService: JwtGenerator) {}

  public async handle(user: User): Promise<string> {
    return this.jwtService.createToken({
      email: user.email,
      sub: user.id,
    });
  }
}
