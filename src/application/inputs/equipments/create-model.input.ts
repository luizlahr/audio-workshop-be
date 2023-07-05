import { CreateModelDTO } from '@domain/equipment/dtos/create-model.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateModelInput implements CreateModelDTO {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  name: string;

  @IsUUID()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  brand_id: string;

  @IsUUID()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  category_id: string;
}
