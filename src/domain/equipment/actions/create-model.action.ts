import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CreateModelDTO } from '../dtos/create-model.dto';
import { Model } from '../models/Model';
import { ModelRepository } from '../repositories/model.repository';

@Injectable()
export class CreateModel {
  constructor(private modelRepository: ModelRepository) {}

  public async handle(modelData: CreateModelDTO): Promise<Model> {
    const model = await this.modelRepository.getByName(modelData.name);

    if (model) {
      return model;
    }

    const newModel = await this.modelRepository.create<CreateModelDTO>(
      modelData,
    );

    return newModel;
  }
}
