import { BaseRepository } from '@domain/common/repositories/base.repository';
import { OrderItem } from '@domain/order/models/order-item';

export abstract class OrderItemRepository extends BaseRepository<OrderItem> {}
