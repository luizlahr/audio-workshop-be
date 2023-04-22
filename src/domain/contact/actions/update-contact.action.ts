import { Injectable } from '@nestjs/common';
import { Contact } from '../models/contact';
import { ContactRepository } from '../repositories/contact.repository';
import { CreateContactDTO } from '../dtos/create-contact.dto';
import { ContactNotFoundError } from '../errors/contact-not-found.error';
import { EmailAlreadyInUseError } from '@domain/common/errors/email-already-in-use.error';

@Injectable()
export class UpdateContact {
  constructor(private contactRepository: ContactRepository) {}

  public async handle(
    contactId: string,
    contactData: CreateContactDTO,
  ): Promise<Contact> {
    console.log(contactData);
    const checkContactId = await this.contactRepository.getById(contactId);
    if (!checkContactId) {
      throw new ContactNotFoundError();
    }

    if (contactData?.email !== undefined) {
      const checkContactEmail = await this.contactRepository.getByEmail(
        contactData.email,
      );

      if (checkContactEmail && checkContactEmail.id !== contactId) {
        throw new EmailAlreadyInUseError();
      }
    }

    return this.contactRepository.update(contactId, contactData);
  }
}
