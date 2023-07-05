import { CheckInvalidItems } from '@domain/order/actions/check-invalid-items.action';
import { CreateOrderItem } from '@domain/order/actions/create-order-item.action';
import { CreateOrder } from '@domain/order/actions/create-order.action';
import { ListOrders } from '@domain/order/actions/list-orders.action';
import { ReadOrder } from '@domain/order/actions/read-order.action';

export const orderActions = [
  CreateOrder,
  ListOrders,
  ReadOrder,
  CreateOrderItem,
  CheckInvalidItems,
];
