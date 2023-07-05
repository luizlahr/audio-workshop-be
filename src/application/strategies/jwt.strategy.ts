import { CheckUser } from '@domain/auth/actions/check-user.action';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private checkUser: CheckUser) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
      logging: true,
    });
  }

  async validate({ sub, email }: any) {
    const userId = sub;
    const check = await this.checkUser.handle(userId);

    if (!check) {
      return false;
    }

    return { userId: sub, email };
  }
}
