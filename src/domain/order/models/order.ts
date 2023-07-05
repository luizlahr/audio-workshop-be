import { Contact } from '@domain/contact/models/Contact';
import { User } from '@domain/user/models/user';
import { OrderItem } from '@domain/order/models/order-item';

export type OrderStatus =
  | 'draft'
  | 'open'
  | 'quoted'
  | 'approved'
  | 'refused'
  | 'done'
  | 'closed';

export interface Order {
  id: number;
  user_id: string;
  customer_id: string;
  customer: Contact;
  user: User;
  accessories?: string;
  problem?: string;
  notes?: string;
  status: string;
  items?: OrderItem[];
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
