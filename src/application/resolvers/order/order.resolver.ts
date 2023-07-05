import { JwtAuthGuard } from '@application/guards/jwt-auth.guard';
import { CreateOrderInput } from '@application/inputs/order/create-order.input';
import { Order } from '@application/models/order.model';
import { CreateOrder } from '@domain/order/actions/create-order.action';
import { ListOrders } from '@domain/order/actions/list-orders.action';
import { ReadOrder } from '@domain/order/actions/read-order.action';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@UseGuards(JwtAuthGuard)
@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private listOrders: ListOrders,
    private createOrder: CreateOrder,
    private readOrder: ReadOrder,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  list() {
    console.log();
    return this.listOrders.handle();
  }

  @Query(() => Order, { name: 'order' })
  read(@Args('orderId') orderId: number) {
    return this.readOrder.handle(orderId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Order, { name: 'createOrder' })
  create(@Args('data') orderData: CreateOrderInput, @Context() context) {
    const userId = context?.req?.user.userId;

    return this.createOrder.handle({ ...orderData, user_id: userId });
  }
}
