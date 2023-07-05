import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { CreateBrandDTO } from '../dtos/create-brand.dto';
import { Brand } from '../models/Brand';
import { BrandRepository } from '../repositories/brand.repository';

@Injectable()
export class CreateBrand {
  constructor(private brandRepository: BrandRepository) {}

  public async handle(brandData: CreateBrandDTO): Promise<Brand> {
    const brand = await this.brandRepository.getByName(brandData.name);

    if (brand) {
      return brand;
    }

    const newBrand = await this.brandRepository.create<CreateBrandDTO>(
      brandData,
    );

    return newBrand;
  }
}
