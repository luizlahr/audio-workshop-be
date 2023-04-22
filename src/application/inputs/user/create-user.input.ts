import { CreateUserDTO } from '@domain/user/dtos/create-user.dto';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput implements CreateUserDTO {
  @IsNotEmpty({ message: 'campo obrigatório' })
  @Field()
  name: string;

  @IsEmail({}, { message: 'email inválido' })
  @Field()
  email: string;

  @Field()
  @MinLength(6, { message: 'mínimo 6 caracteres' })
  @MaxLength(20, { message: 'máximo 20 caracteres' })
  password: string;
}
