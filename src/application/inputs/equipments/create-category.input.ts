import { CreateCategoryDTO } from '@domain/equipment/dtos/create-category.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput implements CreateCategoryDTO {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  name: string;
}
