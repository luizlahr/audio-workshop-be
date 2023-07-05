import { Injectable } from '@nestjs/common';
import { UserRepository } from '@domain/user/repositories/user.repository';

@Injectable()
export class CheckUser {
  constructor(private userRepository: UserRepository) {}

  public async handle(userId: string): Promise<boolean> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      return false;
    }

    return true;
  }
}
