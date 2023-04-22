import { Contact as IContact } from '@domain/contact/models/Contact';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@ObjectType()
export class Contact implements IContact {
  @Field()
  id: string;

  @Field()
  @IsIn(['fisica', 'juridica'])
  type: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  nickname: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  mobile: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  nid: string;

  @Field({ nullable: true })
  ssn: string;

  @Field({ nullable: true })
  address_street: string;

  @Field({ nullable: true })
  address_number: string;

  @Field({ nullable: true })
  address_extra: string;

  @Field({ nullable: true })
  district: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  zipcode: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
