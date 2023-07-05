import { CreateBrand } from '@domain/equipment/actions/create-brand.action';
import { CreateCategory } from '@domain/equipment/actions/create-category.action';
import { CreateModel } from '@domain/equipment/actions/create-model.action';
import { GetModelsByBrandCategory } from '@domain/equipment/actions/get-models-by-brand-category.action';
import { ListBrands } from '@domain/equipment/actions/list-brands.action';
import { ListCategories } from '@domain/equipment/actions/list-categories.action';
import { ListModels } from '@domain/equipment/actions/list-models.action';
import { ReadBrand } from '@domain/equipment/actions/read-brand.action';
import { ReadCategory } from '@domain/equipment/actions/read-category.action';

export const equipmentActions = [
  CreateBrand,
  CreateCategory,
  CreateModel,
  GetModelsByBrandCategory,
  ReadBrand,
  ReadCategory,
  ListCategories,
  ListBrands,
  ListModels,
];
