import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../repositories/contact.repository';
import { ContactNotFoundError } from '../errors/contact-not-found.error';

@Injectable()
export class DeleteContact {
  constructor(private contactRepository: ContactRepository) {}

  public async handle(contactId: string): Promise<void> {
    const contact = await this.contactRepository.getById(contactId);

    if (!contact) {
      throw new ContactNotFoundError();
    }

    await this.contactRepository.delete(contactId);
  }
}
