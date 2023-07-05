import { Order as IOrder } from '@domain/order/models/Order';
import { Field, ObjectType } from '@nestjs/graphql';
import { Contact } from '@application/models/contact.model';
import { User } from '@application/models/user.model';
import { OrderItem } from './order-item.model';

@ObjectType()
export class Order implements IOrder {
  @Field()
  id: number;

  @Field()
  user_id: string;

  @Field(() => User)
  user: User;

  @Field()
  customer_id: string;

  @Field(() => Contact)
  customer: Contact;

  @Field({ nullable: true })
  accessories?: string;

  @Field({ nullable: true })
  problem?: string;

  @Field({ nullable: true })
  notes?: string;

  @Field()
  status: string;

  @Field(() => [OrderItem], { nullable: true })
  items?: OrderItem[];

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field({ nullable: true })
  deleted_at: Date;
}
