"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const types_1 = require("../../../libs/types/src");
const config_1 = require("@nestjs/config");
const auth_helper_1 = require("../auth/auth.helper");
let UserService = class UserService {
    constructor(userRepository, config, helper) {
        this.userRepository = userRepository;
        this.config = config;
        this.helper = helper;
    }
    async createAdmin() {
        const isAdminExit = await this.userRepository.findOneBy({
            role: types_1.UserRoleEnum.ADMIN,
        });
        if (isAdminExit != null)
            return;
        const adminDetail = this.config.get(types_1.ConfigEnum.SERVER).admin;
        const adminUser = Object.assign(Object.assign({}, adminDetail), { role: types_1.UserRoleEnum.ADMIN, status: types_1.UserStatusEnum.ACTIVE });
        const admin = new user_entity_1.User(adminUser);
        const hashedPassword = await this.helper.encodePassword(adminDetail.password);
        admin.setPassword(hashedPassword);
        this.userRepository.save(admin);
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.find({
            where: {
                role: (0, typeorm_2.Not)(types_1.UserRoleEnum.ADMIN),
            },
        });
    }
    async findOne(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        await this.userRepository.remove(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)(config_1.ConfigService)),
    __param(2, (0, common_1.Inject)(auth_helper_1.AuthHelper)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService,
        auth_helper_1.AuthHelper])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map