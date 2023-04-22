import { LoginDTO } from '@domain/auth/dtos/login.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class LoginUserInput implements LoginDTO {
  @IsEmail({}, { message: 'email inválido' })
  @Field()
  email: string;

  @Field()
  password: string;
}
