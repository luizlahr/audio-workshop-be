import { Brand as IBrand } from '@domain/equipment/models/brand';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brand implements IBrand {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
