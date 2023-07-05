import { Model as IModel } from '@domain/equipment/models/model';
import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from './category.model';
import { Brand } from './brand.model';

@ObjectType()
export class Model implements IModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  category_id: string;

  @Field()
  brand_id: string;

  @Field(() => Category)
  category: Category;

  @Field(() => Brand)
  brand: Brand;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
