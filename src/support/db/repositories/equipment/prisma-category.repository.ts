import { Category } from '@domain/equipment/models/Category';
import { CategoryRepository } from '@domain/equipment/repositories/category.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaCategoryRepository
  extends CategoryRepository
  implements CategoryRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.category;
  }

  getByName(name: string): Promise<Category> {
    return this.model.findFirst({
      where: { name, ...this.defaultFilter },
    });
  }
}
