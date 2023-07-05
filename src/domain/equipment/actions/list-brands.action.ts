import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Brand } from '../models/Brand';
import { BrandRepository } from '../repositories/brand.repository';

@Injectable()
export class ListBrands {
  constructor(private brandRepository: BrandRepository) {}

  public async handle(): Promise<Brand[]> {
    return this.brandRepository.getAll();
  }
}
