import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsRequiredWith(
  property: string,
  relatedFieldName?: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return !(relatedValue && !value);
        },
        defaultMessage() {
          // here you can provide default error message if validation failed
          return `campo obrigatório quando ${
            relatedFieldName ?? property
          } presente`;
        },
      },
    });
  };
}
