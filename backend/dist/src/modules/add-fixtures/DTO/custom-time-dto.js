"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsTimeFormat = exports.TimeFormatConstraint = void 0;
const class_validator_1 = require("class-validator");
let TimeFormatConstraint = class TimeFormatConstraint {
    validate(time, args) {
        return /^([01]\d|2[0-3]):?([0-5]\d)$/.test(time);
    }
    defaultMessage(args) {
        return `${args.property} must be a valid time in HH:mm format`;
    }
};
TimeFormatConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'timeFormat', async: false })
], TimeFormatConstraint);
exports.TimeFormatConstraint = TimeFormatConstraint;
function IsTimeFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isTimeFormat',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: TimeFormatConstraint,
        });
    };
}
exports.IsTimeFormat = IsTimeFormat;
//# sourceMappingURL=custom-time-dto.js.map