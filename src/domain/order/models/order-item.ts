import { Model } from '@domain/equipment/models/model';

export interface OrderItem {
  id: string;
  model_id: string;
  model: Model;
  serial_number: string;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
