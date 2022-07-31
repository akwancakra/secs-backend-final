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
exports.NilaiController = void 0;
const common_1 = require("@nestjs/common");
const nilai_service_1 = require("./nilai.service");
let NilaiController = class NilaiController {
    constructor(nilaiService) {
        this.nilaiService = nilaiService;
    }
    async create(id_jadwal, id_siswa, nilai) {
        await this.nilaiService.create({
            id_jadwal,
            id_siswa,
            nilai
        });
        return {
            message: nilai
        };
    }
    async showData() {
        const nilai = await this.nilaiService.showAllData();
        return nilai;
    }
    async showBySiswaId(id_siswa) {
        const show = await this.nilaiService.findSiswa(id_siswa);
        return show;
    }
    async showByMapelId(id_jadwal) {
        const show = await this.nilaiService.findMapel(id_jadwal);
        return show;
    }
    async update(id, id_jadwal, id_siswa, nilai) {
        const updateNilai = await this.nilaiService.update(id, {
            id_jadwal,
            id_siswa,
            nilai
        });
        return updateNilai;
    }
    async delete(id) {
        await this.nilaiService.delete(id);
        return {
            message: `Data dengan id: ${id} Berhasil dihapus`
        };
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('id_jadwal')),
    __param(1, (0, common_1.Body)('id_siswa')),
    __param(2, (0, common_1.Body)('nilai')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('siswa-id'),
    __param(0, (0, common_1.Param)('id_siswa')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "showBySiswaId", null);
__decorate([
    (0, common_1.Get)('mapel-id'),
    __param(0, (0, common_1.Param)('id_jadwal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "showByMapelId", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_jadwal')),
    __param(2, (0, common_1.Body)('id_siswa')),
    __param(3, (0, common_1.Body)('nilai')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NilaiController.prototype, "delete", null);
NilaiController = __decorate([
    (0, common_1.Controller)('nilai'),
    __metadata("design:paramtypes", [nilai_service_1.NilaiService])
], NilaiController);
exports.NilaiController = NilaiController;
//# sourceMappingURL=nilai.controller.js.map