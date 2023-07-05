import { BaseRepository } from '@domain/common/repositories/base.repository';
import { Order } from '@domain/order/models/order';

export abstract class OrderRepository extends BaseRepository<Order> {
  abstract readOrder(orderId: number): Promise<Order | null>;
}
