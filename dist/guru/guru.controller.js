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
exports.GuruController = void 0;
const common_1 = require("@nestjs/common");
const guru_service_1 = require("./guru.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
let GuruController = class GuruController {
    constructor(guruService) {
        this.guruService = guruService;
        this.SERVER_URL = 'http://localhost:5000/guru/';
    }
    async create(id_user, nama, nip, file, jenis_kelamin, agama, id_mata_pelajaran) {
        const url = `${this.SERVER_URL}${file.path}`;
        const createGuru = await this.guruService.create({
            id_user,
            nama,
            nip,
            photo: url.replace(/\\/g, "/"),
            jenis_kelamin,
            agama,
            id_mata_pelajaran
        });
        return createGuru;
    }
    async showData() {
        const guru = await this.guruService.showAllData();
        return guru;
    }
    async showByUserId(id_user) {
        const show = await this.guruService.findUser(id_user);
        return show;
    }
    async showByGuruId(id) {
        const show = await this.guruService.findId(id);
        return show;
    }
    async update(id, id_user, nama, nip, file, jenis_kelamin, agama, id_mata_pelajaran) {
        const url = `${this.SERVER_URL}${file.path}`;
        const updateGuru = await this.guruService.update(id, {
            id_user,
            nama,
            nip,
            photo: url.replace(/\\/g, "/"),
            jenis_kelamin,
            agama,
            id_mata_pelajaran
        });
        return updateGuru;
    }
    async delete(id) {
        await this.guruService.delete(id);
        return {
            message: `id:${id} berhasil dihapus`
        };
    }
    async getAvatar(fileId, res) {
        res.sendFile(fileId, { root: 'avatars' });
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './avatars',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)('id_user')),
    __param(1, (0, common_1.Body)('nama')),
    __param(2, (0, common_1.Body)('nip')),
    __param(3, (0, common_1.UploadedFile)()),
    __param(4, (0, common_1.Body)('jenis_kelamin')),
    __param(5, (0, common_1.Body)('agama')),
    __param(6, (0, common_1.Body)('id_mata_pelajaran')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object, String, String, Number]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('user-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "showByUserId", null);
__decorate([
    (0, common_1.Get)('guru-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "showByGuruId", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './avatars',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_user')),
    __param(2, (0, common_1.Body)('nama')),
    __param(3, (0, common_1.Body)('nip')),
    __param(4, (0, common_1.UploadedFile)()),
    __param(5, (0, common_1.Body)('jenis_kelamin')),
    __param(6, (0, common_1.Body)('agama')),
    __param(7, (0, common_1.Body)('id_mata_pelajaran')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Object, String, String, Number]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('avatars/:fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "getAvatar", null);
GuruController = __decorate([
    (0, common_1.Controller)('guru'),
    __metadata("design:paramtypes", [guru_service_1.GuruService])
], GuruController);
exports.GuruController = GuruController;
//# sourceMappingURL=guru.controller.js.map