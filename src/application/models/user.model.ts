import { User as IUser } from '@domain/user/models/User';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User implements IUser {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field()
  password: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
