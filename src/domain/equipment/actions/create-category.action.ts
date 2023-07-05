import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import { Category } from '../models/Category';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class CreateCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  public async handle(categoryData: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoryRepository.getByName(categoryData.name);

    if (category) {
      return category;
    }

    const newCategory = await this.categoryRepository.create<CreateCategoryDTO>(
      categoryData,
    );

    return newCategory;
  }
}
