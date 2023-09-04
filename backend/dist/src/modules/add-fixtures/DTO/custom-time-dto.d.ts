import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class TimeFormatConstraint implements ValidatorConstraintInterface {
    validate(time: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsTimeFormat(validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
