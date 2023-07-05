import { BaseRepository } from '@domain/common/repositories/base.repository';
import { Category } from '../models/category';

export abstract class CategoryRepository extends BaseRepository<Category> {
  abstract getByName(name: string): Promise<Category | null>;
}
