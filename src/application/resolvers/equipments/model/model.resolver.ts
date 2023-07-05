// import { UpdateModelInput } from '@application/inputs/model/update-model.input';
// import { DeleteModel } from '@domain/model/actions/delete-model.action';
// import { UpdateModel } from '@domain/model/actions/update-model.action';
import { BrandAndCategoryInput } from '@application/inputs/equipments/brand-and-category.input';
import { CreateModelInput } from '@application/inputs/equipments/create-model.input';
import { Model } from '@application/models/model.model';
import { CreateModel } from '@domain/equipment/actions/create-model.action';
import { GetModelsByBrandCategory } from '@domain/equipment/actions/get-models-by-brand-category.action';
import { ListModels } from '@domain/equipment/actions/list-models.action';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Model)
export class ModelResolver {
  constructor(
    private listModels: ListModels,
    private readModel: GetModelsByBrandCategory,
    private createModel: CreateModel, // private updateModel: UpdateModel, // private deleteModel: DeleteModel,
  ) {}

  @Query(() => [Model], { name: 'models' })
  list() {
    return this.listModels.handle();
  }

  @Query(() => Model, { name: 'modelByBrandAndCategory' })
  async read(@Args('modelId') brandAndCategoryInput: BrandAndCategoryInput) {
    return this.readModel.handle(brandAndCategoryInput);
  }

  @Mutation(() => Model, { name: 'createModel' })
  create(@Args('data') data: CreateModelInput) {
    return this.createModel.handle(data);
  }

  // @Mutation(() => Model, { name: 'updateModel' })
  // update(
  //   @Args('modelId', { type: () => String }) modelId: string,
  //   @Args('data') data: UpdateModelInput,
  // ) {
  //   return this.updateModel.handle(modelId, data);
  // }

  // @Mutation(() => String, { name: 'deleteModel', nullable: true })
  // delete(@Args('modelId') modelId: string): Promise<void> {
  //   return this.deleteModel.handle(modelId);
  // }
}
