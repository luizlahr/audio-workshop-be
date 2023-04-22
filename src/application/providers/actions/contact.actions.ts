import { CreateContact } from '@domain/contact/actions/create-contact.action';
import { DeleteContact } from '@domain/contact/actions/delete-contact.action';
import { ListContacts } from '@domain/contact/actions/list-contact.action';
import { ReadContact } from '@domain/contact/actions/read-contact.action';
import { UpdateContact } from '@domain/contact/actions/update-contact.action';

export const contactActions = [
  CreateContact,
  ListContacts,
  ReadContact,
  UpdateContact,
  DeleteContact,
];
