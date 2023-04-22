import { Hasher } from '@domain/common/services/hasher.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptHasher implements Hasher {
  private salt: number;
  constructor() {
    this.salt = Number(process.env.HASHER_SALT);
  }

  hash(text: string): string {
    return bcrypt.hashSync(text, this.salt);
  }

  check(text: string, hash: string): boolean {
    return bcrypt.compareSync(text, hash);
  }
}
