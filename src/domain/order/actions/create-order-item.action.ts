import { OrderRepository } from '@domain/order/repositories/order.repository';
import { Injectable } from '@nestjs/common';
import { CreateOrderItemDTO } from '@domain/order/dtos/create-order-item.dto';
import { OrderNotFoundError } from '@domain/order/errors/order-not-found.error';
import { OrderItemRepository } from '@domain/order/repositories/order-item.repository';
import { OrderItem } from '@domain/order/models/order-item';

@Injectable()
export class CreateOrderItem {
  constructor(
    private orderRepository: OrderRepository,
    private itemRepository: OrderItemRepository,
  ) {}

  public async handle({
    order_id,
    items,
  }: CreateOrderItemDTO): Promise<OrderItem[]> {
    const order = this.orderRepository.getById(order_id);

    if (!order) {
      throw new OrderNotFoundError();
    }

    const newItems = Promise.all(
      items.map(
        async (item) => await this.itemRepository.create({ ...item, order_id }),
      ),
    );

    return newItems;
  }
}
