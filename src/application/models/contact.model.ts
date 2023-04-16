import {
  ContactType as IContactType,
  Contact as IContact,
} from '@domain/contact/models/Contact';
import { Field, ObjectType } from '@nestjs/graphql';

enum ContactType {
  'fisica',
  'juridica',
}

@ObjectType()
export class Contact implements IContact {
  @Field()
  id: string;

  @Field((type) => ContactType)
  type: IContactType;

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  email: string;

  @Field()
  mobile: string;

  @Field()
  phone: string;

  @Field()
  nid: string;

  @Field()
  ssn: string;

  @Field()
  address_street: string;

  @Field()
  address_number: string;

  @Field()
  address_extra: string;

  @Field()
  district: string;

  @Field()
  city: string;

  @Field()
  zipcode: string;
}
