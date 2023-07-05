import { Injectable } from '@nestjs/common';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class ListUsers {
  constructor(private userRepository: UserRepository) {}

  public async handle(): Promise<User[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
