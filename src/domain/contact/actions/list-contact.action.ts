import { Injectable } from '@nestjs/common';
import { Contact } from '../models/contact';
import { ContactRepository } from '../repositories/contact.repository';

@Injectable()
export class ListContacts {
  constructor(private contactRepository: ContactRepository) {}

  public async handle(): Promise<Contact[]> {
    const contacts = await this.contactRepository.getAll();
    return contacts ?? [];
  }
}
