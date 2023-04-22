import { JWTPayloadDTO } from '../ dtos/jwt-payload.dto';

export abstract class JwtGenerator {
  abstract createToken(payload: JWTPayloadDTO): Promise<string>;
}
