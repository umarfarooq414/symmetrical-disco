"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const registration_controller_1 = require("./registration.controller");
const team_entity_1 = require("./entities/team-entity");
const teamMembers_1 = require("./entities/teamMembers");
const registration_service_1 = require("./registration.service");
const cloudinary_config_1 = require("../../config/cloudinary.config");
const sports_entity_1 = require("../sports/entities/sports.entity");
const mail_service_1 = require("../mail/mail.service");
let RegistrationModule = class RegistrationModule {
};
RegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([team_entity_1.Teams, teamMembers_1.TeamMember, sports_entity_1.Sports])],
        controllers: [registration_controller_1.RegistrationController],
        providers: [registration_service_1.RegistrationService, cloudinary_config_1.CloudinaryConfigService, mail_service_1.MailService],
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;
//# sourceMappingURL=registration.module.js.map