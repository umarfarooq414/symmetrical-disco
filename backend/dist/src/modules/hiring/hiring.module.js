"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiringModule = void 0;
const common_1 = require("@nestjs/common");
const hiring_controller_1 = require("./hiring.controller");
const hiring_service_1 = require("./hiring.service");
const typeorm_1 = require("@nestjs/typeorm");
const hiring_entity_1 = require("./entities/hiring.entity");
const user_entity_1 = require("../user/entities/user.entity");
const cloudinary_config_1 = require("../../config/cloudinary.config");
const hiringTable_entity_1 = require("./entities/hiringTable.entity");
const mail_service_1 = require("../mail/mail.service");
let HiringModule = class HiringModule {
};
HiringModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hiring_entity_1.Hiring, user_entity_1.User, hiringTable_entity_1.HiringTable])],
        controllers: [hiring_controller_1.HiringController],
        providers: [hiring_service_1.HiringService, cloudinary_config_1.CloudinaryConfigService, mail_service_1.MailService],
    })
], HiringModule);
exports.HiringModule = HiringModule;
//# sourceMappingURL=hiring.module.js.map