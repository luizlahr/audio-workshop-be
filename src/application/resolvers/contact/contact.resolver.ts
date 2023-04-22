import { JwtAuthGuard } from '@application/guards/jwt-auth.guard';
import { CreateContactInput } from '@application/inputs/contact/create-contact.input';
import { UpdateContactInput } from '@application/inputs/contact/update-contact.input';
import { Contact } from '@application/models/contact.model';
import { CreateContact } from '@domain/contact/actions/create-contact.action';
import { DeleteContact } from '@domain/contact/actions/delete-contact.action';
import { ListContacts } from '@domain/contact/actions/list-contact.action';
import { ReadContact } from '@domain/contact/actions/read-contact.action';
import { UpdateContact } from '@domain/contact/actions/update-contact.action';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(
    private listContacts: ListContacts,
    private readContact: ReadContact,
    private createContact: CreateContact,
    private updateContact: UpdateContact,
    private deleteContact: DeleteContact,
  ) {}

  @Query(() => [Contact], { name: 'contacts' })
  @UseGuards(JwtAuthGuard)
  list() {
    return this.listContacts.handle();
  }

  @Query(() => Contact, { name: 'contact' })
  async read(@Args('contactId') contactId: string) {
    return this.readContact.handle(contactId);
  }

  @Mutation(() => Contact, { name: 'createContact' })
  create(@Args('data') data: CreateContactInput) {
    return this.createContact.handle(data);
  }

  @Mutation(() => Contact, { name: 'updateContact' })
  update(
    @Args('contactId', { type: () => String }) contactId: string,
    @Args('data') data: UpdateContactInput,
  ) {
    return this.updateContact.handle(contactId, data);
  }

  @Mutation(() => String, { name: 'deleteContact', nullable: true })
  delete(@Args('contactId') contactId: string): Promise<void> {
    return this.deleteContact.handle(contactId);
  }
}
