import { GetByBrandAndCategoryDTO } from '@domain/equipment/dtos/get-by-brand-category.dto';
import { Model } from '@domain/equipment/models/Model';
import { ModelRepository } from '@domain/equipment/repositories/model.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaModelRepository
  extends ModelRepository
  implements ModelRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.model;
    this.include = {
      category: true,
      brand: true,
    };
  }

  getByBrandAndCategory({
    category_id,
    brand_id,
  }: GetByBrandAndCategoryDTO): Promise<Model[]> {
    return this.model.findMany({
      where: {
        category_id,
        brand_id,
        ...this.defaultFilter,
      },
      include: this.include,
    });
  }

  getByName(name: string): Promise<Model> {
    return this.model.findFirst({
      where: { name, ...this.defaultFilter },
      include: this.include,
    });
  }
}
