import { Brand } from './Brand';
import { Category } from './Category';

export interface Model {
  id: string;
  name: string;
  brand_id: string;
  brand?: Brand;
  category_id: string;
  category?: Category;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
