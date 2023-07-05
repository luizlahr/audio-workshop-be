import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Brand } from '../models/Brand';
import { BrandRepository } from '../repositories/brand.repository';
import { BrandNotFoundError } from '../errors/brand-not-found.error';

@Injectable()
export class ReadBrand {
  constructor(private brandRepository: BrandRepository) {}

  public async handle(brandId: string): Promise<Brand> {
    const brand = await this.brandRepository.getById(brandId);

    if (!brand) {
      throw new BrandNotFoundError();
    }

    return brand;
  }
}
