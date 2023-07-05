import { Injectable } from '@nestjs/common';
import { Contact } from '../models/contact';
import { ContactRepository } from '../repositories/contact.repository';
import { CreateContactDTO } from '../dtos/create-contact.dto';
import { EmailAlreadyInUseError } from '@domain/common/errors/email-already-in-use.error';
import { EmailOrMobileRequiredError } from '../errors/email-or-mobile-required.error';

@Injectable()
export class CreateContact {
  constructor(private contactRepository: ContactRepository) {}

  public async handle(contactData: CreateContactDTO): Promise<Contact> {
    if (!contactData.email && !contactData.mobile) {
      throw new EmailOrMobileRequiredError();
    }

    if (!!contactData.email) {
      const checkContactEmail = await this.contactRepository.getByEmail(
        contactData.email,
      );

      if (checkContactEmail) {
        throw new EmailAlreadyInUseError();
      }
    }

    const contact = await this.contactRepository.create<CreateContactDTO>(
      contactData,
    );

    return contact;
  }
}
