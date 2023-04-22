import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';
import { UserNotFoundError } from '../errors/user-not-found.error';

@Injectable()
export class ReadUser {
  constructor(private userRepository: UserRepository) {}

  public async handle(userId: string): Promise<User> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      console.log('HERE');
      throw new UserNotFoundError();
    }

    return user;
  }
}
