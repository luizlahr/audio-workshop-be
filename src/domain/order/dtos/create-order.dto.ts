import { OrderItem } from './create-order-item.dto';

export interface CreateOrderDTO {
  customer_id: string;
  user_id: string;
  items: OrderItem[];
  accessories?: string;
  problem?: string;
  notes?: string;
}
