"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.TypeOrmAsyncConfig = exports.typeOrmConfig = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const ORMConfig = require("./config/orm.config");
const server_config_1 = require("./config/server.config");
const swagger_config_1 = require("./config/swagger.config");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const hiring_module_1 = require("./modules/hiring/hiring.module");
const cloudinary_config_1 = require("./config/cloudinary.config");
const jwtConfig_1 = require("./config/jwtConfig");
const registration_module_1 = require("./modules/team-registration/registration.module");
const fixtures_module_1 = require("./modules/fixtures/fixtures.module");
const add_fixtures_module_1 = require("./modules/add-fixtures/add-fixtures.module");
const sports_module_1 = require("./modules/sports/sports.module");
const results_module_1 = require("./modules/results/results.module");
const inventory_module_1 = require("./modules/inventory/inventory.module");
const mail_module_1 = require("./modules/mail/mail.module");
exports.typeOrmConfig = ORMConfig;
exports.TypeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async () => {
        return ORMConfig;
    },
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [server_config_1.default, swagger_config_1.default, jwtConfig_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync(exports.TypeOrmAsyncConfig),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            hiring_module_1.HiringModule,
            registration_module_1.RegistrationModule,
            fixtures_module_1.FixturesModule,
            add_fixtures_module_1.AddFixturesModule,
            sports_module_1.SportsModule,
            results_module_1.ResultsModule,
            inventory_module_1.InventoryModule,
            mail_module_1.MailModule,
        ],
        controllers: [],
        providers: [cloudinary_config_1.CloudinaryConfigService],
        exports: [cloudinary_config_1.CloudinaryConfigService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map