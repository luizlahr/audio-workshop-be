export interface OrderItem {
  model_id: string;
  serial_number?: string;
}

export interface CreateOrderItemDTO {
  order_id: number;
  items: OrderItem[];
}
