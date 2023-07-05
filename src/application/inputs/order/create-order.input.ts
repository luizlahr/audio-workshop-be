import { CreateOrderDTO } from '@domain/order/dtos/create-order.dto';
import { OrderItem as OrderItemDTO } from '@domain/order/dtos/create-order-item.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class OrderItemInput {
  @IsString()
  @Field()
  model_id: string;

  @IsString()
  @Field()
  serial_number: string;
}

@InputType()
export class CreateOrderInput implements Omit<CreateOrderDTO, 'user_id'> {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  customer_id: string;

  @IsArray()
  @Field(() => [OrderItemInput])
  items: Array<OrderItemDTO>;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  accessories?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  problem?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  notes?: string;
}
