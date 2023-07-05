import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Category } from '../models/Category';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryNotFoundError } from '../errors/category-not-found.error';

@Injectable()
export class ReadCategory {
  constructor(private categoryRepository: CategoryRepository) {}

  public async handle(categoryId: string): Promise<Category> {
    const category = await this.categoryRepository.getById(categoryId);

    if (!category) {
      throw new CategoryNotFoundError();
    }

    return category;
  }
}
