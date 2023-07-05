import { Injectable } from '@nestjs/common';
import { Model } from '../models/Model';
import { ModelRepository } from '../repositories/model.repository';
import { GetByBrandAndCategoryDTO } from '../dtos/get-by-brand-category.dto';
import { ModelNotFoundError } from '../errors/model-not-found.error';

@Injectable()
export class GetModelsByBrandCategory {
  constructor(private modelRepository: ModelRepository) {}

  public async handle(
    brandAndCategoryData: GetByBrandAndCategoryDTO,
  ): Promise<Model[]> {
    const models = await this.modelRepository.getByBrandAndCategory(
      brandAndCategoryData,
    );

    if (!models) {
      throw new ModelNotFoundError();
    }

    return models;
  }
}
