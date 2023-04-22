import { User } from '@domain/user/models/user';
import { UserRepository } from '@domain/user/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { LoginDTO } from '../dtos/login.dto';
import { UnauthorizedError } from '@domain/common/errors/unauthorized.error';
import { Hasher } from '@domain/common/services/hasher.service';

@Injectable()
export class ValidateUser {
  constructor(
    private userRepository: UserRepository,
    private hashService: Hasher,
  ) {}

  public async handle({ email, password }: LoginDTO): Promise<User> {
    const user = await this.userRepository.getByEmail(email);

    if (!user || !this.hashService.check(password, user.password)) {
      throw new UnauthorizedError('dados de acesso inválidos');
    }

    return user;
  }
}
