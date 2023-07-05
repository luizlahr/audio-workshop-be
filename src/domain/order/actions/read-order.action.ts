import { Order } from '@domain/order/models/order';
import { OrderRepository } from '@domain/order/repositories/order.repository';
import { Injectable } from '@nestjs/common';
import { OrderNotFoundError } from '../errors/order-not-found.error';

@Injectable()
export class ReadOrder {
  constructor(private orderRepository: OrderRepository) {}

  public async handle(orderId: number): Promise<Order> {
    const order = this.orderRepository.readOrder(orderId);

    if (!order) {
      throw new OrderNotFoundError();
    }

    return order;
  }
}
