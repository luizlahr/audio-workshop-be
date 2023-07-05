// import { UpdateCategoryInput } from '@application/inputs/category/update-category.input';
// import { DeleteCategory } from '@domain/category/actions/delete-category.action';
// import { UpdateCategory } from '@domain/category/actions/update-category.action';
import { CreateCategoryInput } from '@application/inputs/equipments/create-category.input';
import { Category } from '@application/models/category.model';
import { CreateCategory } from '@domain/equipment/actions/create-category.action';
import { ListCategories } from '@domain/equipment/actions/list-categories.action';
import { ReadCategory } from '@domain/equipment/actions/read-category.action';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private listCategories: ListCategories,
    private readCategory: ReadCategory,
    private createCategory: CreateCategory, // private updateCategory: UpdateCategory, // private deleteCategory: DeleteCategory,
  ) {}

  @Query(() => [Category], { name: 'categories' })
  list() {
    return this.listCategories.handle();
  }

  @Query(() => Category, { name: 'category' })
  async read(@Args('categoryId') categoryId: string) {
    return this.readCategory.handle(categoryId);
  }

  @Mutation(() => Category, { name: 'createCategory' })
  create(@Args('data') data: CreateCategoryInput) {
    return this.createCategory.handle(data);
  }

  // @Mutation(() => Category, { name: 'updateCategory' })
  // update(
  //   @Args('categoryId', { type: () => String }) categoryId: string,
  //   @Args('data') data: UpdateCategoryInput,
  // ) {
  //   return this.updateCategory.handle(categoryId, data);
  // }

  // @Mutation(() => String, { name: 'deleteCategory', nullable: true })
  // delete(@Args('categoryId') categoryId: string): Promise<void> {
  //   return this.deleteCategory.handle(categoryId);
  // }
}
