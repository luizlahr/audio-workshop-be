import { GetByBrandAndCategoryDTO } from '@domain/equipment/dtos/get-by-brand-category.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class BrandAndCategoryInput implements GetByBrandAndCategoryDTO {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  brand_id: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  category_id: string;
}
