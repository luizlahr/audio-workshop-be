import { IsNullableEmail } from '@application/validators/nullable-email.validator';
import { IsRequiredWithout } from '@application/validators/required-without.validator';
import { CreateContactDTO } from '@domain/contact/dtos/create-contact.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsNumberString, IsOptional, Length } from 'class-validator';

@InputType()
export class BasicContactInput implements Partial<CreateContactDTO> {
  @IsRequiredWithout('mobile', {
    relatedFieldName: 'celular',
  })
  @IsNullableEmail()
  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  nickname?: string;

  @IsRequiredWithout('email', {
    fieldName: 'celular',
  })
  @Field({ nullable: true })
  mobile?: string;

  @IsOptional()
  @Field({ nullable: true })
  phone?: string;

  @IsOptional()
  @Field({ nullable: true })
  nid?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsNumberString(
    { no_symbols: true },
    { message: 'deve conter apenas números' },
  )
  @Length(11, 11, { message: 'deve conter 11 caracteres' })
  ssn?: string;

  @IsOptional()
  @Field({ nullable: true })
  address_street?: string;

  @IsOptional()
  @Field({ nullable: true })
  address_number?: string;

  @IsOptional()
  @Field({ nullable: true })
  address_extra?: string;

  @IsOptional()
  @Field({ nullable: true })
  district?: string;

  @IsOptional()
  @Field({ nullable: true })
  city?: string;

  @IsOptional()
  @IsNumberString(
    { no_symbols: true },
    { message: 'deve conter apenas números' },
  )
  @Field({ nullable: true })
  @Length(8, 8, { message: 'deve conter 8 caracteres' })
  zipcode?: string;
}
