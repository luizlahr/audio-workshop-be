import { CreateContactDTO } from '@domain/contact/dtos/create-contact.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateContactInput implements CreateContactDTO {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  name: string;

  @IsIn(['fisica', 'juridica'], { message: 'valor inválido' })
  @Field()
  type: string;

  @IsEmail({}, { message: 'email inválido' })
  @Field()
  email: string;
}
