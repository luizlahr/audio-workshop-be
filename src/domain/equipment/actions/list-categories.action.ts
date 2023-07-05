import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Category } from '../models/Category';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable()
export class ListCategories {
  constructor(private categoryRepository: CategoryRepository) {}

  public async handle(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
