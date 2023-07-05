import { BaseRepository } from '@domain/common/repositories/base.repository';
import { Brand } from '../models/brand';

export abstract class BrandRepository extends BaseRepository<Brand> {
  abstract getByName(name: string): Promise<Brand | null>;
}
