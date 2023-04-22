import { Contact } from '@application/models/contact.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListUserOutput {
  @Field((type) => [Contact], { nullable: true })
  data: Array<Contact>;
}
