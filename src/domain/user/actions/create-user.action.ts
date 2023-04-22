import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { EmailAlreadyInUseError } from '@domain/common/errors/email-already-in-use.error';
import { Hasher } from '@domain/common/services/hasher.service';

@Injectable()
export class CreateUser {
  constructor(
    private userRepository: UserRepository,
    private hashService: Hasher,
  ) {}

  public async handle(userData: CreateUserDTO): Promise<User> {
    const checkUserEmail = await this.userRepository.getByEmail(userData.email);

    if (checkUserEmail) {
      throw new EmailAlreadyInUseError();
    }

    const userDataWithHashedPassword = {
      ...userData,
      password: this.hashService.hash(userData.password),
    };

    const user = await this.userRepository.create<CreateUserDTO>(
      userDataWithHashedPassword,
    );

    return user;
  }
}
