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
exports.SiswaController = void 0;
const common_1 = require("@nestjs/common");
const siswa_service_1 = require("./siswa.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
let SiswaController = class SiswaController {
    constructor(siswaService) {
        this.siswaService = siswaService;
        this.SERVER_URL = 'http://localhost:5000/siswa/';
    }
    async create(id_user, nama, nis, file, alamat, agama, jenis_kelamin) {
        const url = `${this.SERVER_URL}${file.path}`;
        const createSiswa = await this.siswaService.create({
            id_user,
            nama,
            nis,
            photo: url.replace(/\\/g, "/"),
            alamat,
            agama,
            jenis_kelamin
        });
        return createSiswa;
    }
    async showData() {
        const siswa = await this.siswaService.showAllData();
        return siswa;
    }
    async showByUserId(id_user) {
        const show = await this.siswaService.findUser(id_user);
        return show;
    }
    async showByGuruId(id) {
        const show = await this.siswaService.findId(id);
        return show;
    }
    async updateImg(id, file) {
        let url = `${this.SERVER_URL}${file.path}`;
        if (file == null) {
            url = (await this.siswaService.findId(id)).photo;
        }
        const updateSiswa = await this.siswaService.update(id, {
            photo: url.replace(/\\/g, "/"),
            filename: file.path,
        });
        return updateSiswa;
    }
    async update(id, nama, nis, agama, jenis_kelamin) {
        const updateSiswa = await this.siswaService.update(id, {
            nama,
            nis,
            agama,
            jenis_kelamin
        });
        return updateSiswa;
    }
    async deleteImg(id) {
        const deleteImg = await this.siswaService.update(id, {
            photo: 'siswa.png',
            filename: null,
        });
        return deleteImg;
    }
    async delete(id) {
        await this.siswaService.delete(id);
        return {
            message: `Data siswa dengan id: ${id} berhasil dihapus`
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
            destination: './public/image/avatar',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)('id_user')),
    __param(1, (0, common_1.Body)('nama')),
    __param(2, (0, common_1.Body)('nis')),
    __param(3, (0, common_1.UploadedFile)()),
    __param(4, (0, common_1.Body)('alamat')),
    __param(5, (0, common_1.Body)('agama')),
    __param(6, (0, common_1.Body)('jenis_kelamin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object, String, String, String]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('user-id/:id'),
    __param(0, (0, common_1.Param)('id_user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "showByUserId", null);
__decorate([
    (0, common_1.Get)('siswa-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "showByGuruId", null);
__decorate([
    (0, common_1.Post)('update-img/:id'),
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
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "updateImg", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('nama')),
    __param(2, (0, common_1.Body)('nis')),
    __param(3, (0, common_1.Body)('agama')),
    __param(4, (0, common_1.Body)('jenis_kelamin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('update-img/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "deleteImg", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('avatars/:fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "getAvatar", null);
SiswaController = __decorate([
    (0, common_1.Controller)('siswa'),
    __metadata("design:paramtypes", [siswa_service_1.SiswaService])
], SiswaController);
exports.SiswaController = SiswaController;
//# sourceMappingURL=siswa.controller.js.map