import { JWTPayloadDTO } from '@domain/common/ dtos/jwt-payload.dto';
import { JwtGenerator } from '@domain/common/services/jwt-generator.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class NestJsJwtService implements JwtGenerator {
  constructor(private jwtService: JwtService) {}

  createToken(payload: JWTPayloadDTO): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
