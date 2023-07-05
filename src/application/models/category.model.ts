import { Category as ICategory } from '@domain/equipment/models/category';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category implements ICategory {
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
