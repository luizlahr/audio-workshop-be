import { CustomerNotFoundError } from '@domain/order/errors/customer-not-found.error';
import { ContactRepository } from '@domain/contact/repositories/contact.repository';
import { CreateOrderDTO } from '@domain/order/dtos/create-order.dto';
import { Order } from '@domain/order/models/order';
import { OrderRepository } from '@domain/order/repositories/order.repository';
import { Injectable } from '@nestjs/common';
import { ModelRepository } from '@domain/equipment/repositories/model.repository';
import { InvalidOrderItemError } from '../errors/invalid-order-items.error';
import { CheckInvalidItems } from './check-invalid-items.action';
import { CreateOrderItem } from './create-order-item.action';

@Injectable()
export class CreateOrder {
  constructor(
    private orderRepository: OrderRepository,
    private checkItems: CheckInvalidItems,
    private createOrderItem: CreateOrderItem,
    private customerRepository: ContactRepository,
  ) {}

  public async handle(orderData: CreateOrderDTO): Promise<Order> {
    const customer = this.customerRepository.getById(orderData.customer_id);

    if (!customer) {
      throw new CustomerNotFoundError();
    }

    const { items, ...orderFields } = orderData;

    await this.checkItems.handle([...items]);

    const order = await this.orderRepository.create<
      Omit<CreateOrderDTO, 'items'>
    >(orderFields);

    await this.createOrderItem.handle({ order_id: order.id, items });

    return order;
  }
}
