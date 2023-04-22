import { BaseRepository } from '@domain/common/repositories/base.repository';
import { User } from '@domain/user/models/user';

export abstract class UserRepository extends BaseRepository<User> {
  abstract getByEmail(email: string): Promise<User | null>;
}
