import { Contact } from '@domain/contact/models/contact';
import { BaseRepository } from '@domain/common/repositories/base.repository';

export abstract class ContactRepository extends BaseRepository<Contact> {
  abstract getByEmail(email: string): Promise<Contact | null>;
}
