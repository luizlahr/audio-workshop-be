import { OrderItem as IOrderItem } from '@domain/order/models/order-item';
import { Field, ObjectType } from '@nestjs/graphql';

import { Model } from './model.model';

@ObjectType()
export class OrderItem implements IOrderItem {
  @Field()
  id: string;

  @Field()
  model_id: string;

  @Field(() => Model)
  model: Model;

  @Field()
  serial_number: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
