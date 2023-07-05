import { Order } from '@domain/order/models/order';
import { OrderRepository } from '@domain/order/repositories/order.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListOrders {
  constructor(private orderRepository: OrderRepository) {}

  public async handle(): Promise<Order[]> {
    return this.orderRepository.getAll();
  }
}
