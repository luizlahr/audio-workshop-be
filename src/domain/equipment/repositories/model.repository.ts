import { BaseRepository } from '@domain/common/repositories/base.repository';
import { Model } from '../models/model';
import { GetByBrandAndCategoryDTO } from '../dtos/get-by-brand-category.dto';

export abstract class ModelRepository extends BaseRepository<Model> {
  abstract getByName(name: string): Promise<Model | null>;
  abstract getByBrandAndCategory(
    brandAndCategoryData: GetByBrandAndCategoryDTO,
  ): Promise<Model[] | null>;
}
