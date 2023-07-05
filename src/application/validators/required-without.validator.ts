import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

type Translations = {
  fieldName?: string;
  relatedFieldName?: string;
};

export function IsRequiredWithout(
  property: string,
  translations?: Translations,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isRequiredWithout',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [{ property, translations }],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const relatedPropertyName = property;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return !(!relatedValue && !value);
        },
        defaultMessage() {
          const { fieldName, relatedFieldName } = translations;
          return `informar ${fieldName ?? propertyName} ou ${
            relatedFieldName ?? property
          }`;
        },
      },
    });
  };
}
