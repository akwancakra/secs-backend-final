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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(id_role, username, email, password) {
        if (await this.userService.findEmail(email)) {
            throw new common_1.BadRequestException('email telah terdaftar');
        }
        const hashedPasword = await bcrypt.hash(password, 12);
        const createUser = await this.userService.create({
            id_role,
            username,
            email,
            password: hashedPasword
        });
        return createUser.id;
    }
    async showData() {
        const users = await this.userService.showAllData();
        return users;
    }
    async showDataById(id) {
        const user = await this.userService.findId(id);
        return user;
    }
    async update(id, username, email, password, confPassword) {
        if (password !== confPassword) {
            throw new common_1.BadRequestException('Konfirmasi password tidak sama dengan password!');
        }
        if (await this.userService.findEmail(email)) {
            throw new common_1.BadRequestException('Email telah terdaftar!');
        }
        const user = await this.userService.findId(id);
        let hashedPasword = '';
        if (password) {
            hashedPasword = await bcrypt.hash(password, 12);
        }
        else {
            hashedPasword = user.password;
        }
        const updateUser = await this.userService.update(id, {
            username,
            email,
            password: hashedPasword
        });
        return updateUser;
    }
    async delete(id) {
        await this.userService.delete(id);
        return {
            message: `Data user dengan id: ${id} berhasil dihapus`
        };
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('role')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('data/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "showDataById", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('password')),
    __param(4, (0, common_1.Body)('confPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map