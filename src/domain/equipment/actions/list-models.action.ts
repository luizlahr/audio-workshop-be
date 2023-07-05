import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Model } from '../models/Model';
import { ModelRepository } from '../repositories/model.repository';

@Injectable()
export class ListModels {
  constructor(private modelRepository: ModelRepository) {}

  public async handle(): Promise<Model[]> {
    const models = await this.modelRepository.getAll();
    return models;
  }
}
