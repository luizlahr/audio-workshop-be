import { Brand } from '@domain/equipment/models/Brand';
import { BrandRepository } from '@domain/equipment/repositories/brand.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@support/services/prisma.service';

@Injectable()
export class PrismaBrandRepository
  extends BrandRepository
  implements BrandRepository
{
  constructor(private prismaService: PrismaService) {
    super();
    this.model = this.prismaService.brand;
  }

  getByName(name: string): Promise<Brand> {
    return this.model.findFirst({
      where: { name, ...this.defaultFilter },
    });
  }
}
