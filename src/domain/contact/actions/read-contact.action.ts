import { Injectable } from '@nestjs/common';
import { Contact } from '../models/contact';
import { ContactRepository } from '../repositories/contact.repository';
import { ContactNotFoundError } from '../errors/contact-not-found.error';

@Injectable()
export class ReadContact {
  constructor(private contactRepository: ContactRepository) {}

  public async handle(contactId: string): Promise<Contact> {
    const contact = await this.contactRepository.getById(contactId);

    if (!contact) {
      throw new ContactNotFoundError();
    }

    return contact;
  }
}
