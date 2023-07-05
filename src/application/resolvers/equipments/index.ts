import { BrandResolver } from '@application/resolvers/equipments/brand/brand.resolver';
import { CategoryResolver } from '@application/resolvers/equipments/category/category.resolver';
import { ModelResolver } from '@application/resolvers/equipments/model/model.resolver';

export const EquipmentResolvers = [
  BrandResolver,
  CategoryResolver,
  ModelResolver,
];
