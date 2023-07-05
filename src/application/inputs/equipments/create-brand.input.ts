import { CreateBrandDTO } from '@domain/equipment/dtos/create-brand.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBrandInput implements CreateBrandDTO {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field({ nullable: true })
  name: string;
}
