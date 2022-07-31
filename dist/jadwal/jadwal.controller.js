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
exports.JadwalController = void 0;
const common_1 = require("@nestjs/common");
const jadwal_service_1 = require("./jadwal.service");
let JadwalController = class JadwalController {
    constructor(jadwalService) {
        this.jadwalService = jadwalService;
    }
    async create(id_guru, ruang, tanggal) {
        await this.jadwalService.create({
            id_guru,
            ruang,
            tanggal
        });
        return {
            message: "Anda berhasil membuat jadwal"
        };
    }
    async showData() {
        const jadwal = await this.jadwalService.showAllData();
        return jadwal;
    }
    async showByJadwalId(id) {
        const show = await this.jadwalService.findJadwal(id);
        return show;
    }
    async showByGuruId(id_guru) {
        const show = await this.jadwalService.findGuru(id_guru);
        return show;
    }
    async update(id, id_guru, ruang, tanggal) {
        const updateJadwal = await this.jadwalService.update(id, {
            id_guru,
            ruang,
            tanggal
        });
        return updateJadwal;
    }
    async delete(id) {
        await this.jadwalService.delete(id);
        return {
            message: `id:${id} berhasil dihapus`
        };
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('id_guru')),
    __param(1, (0, common_1.Body)('ruang')),
    __param(2, (0, common_1.Body)('tanggal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "showByJadwalId", null);
__decorate([
    (0, common_1.Get)('guru-id'),
    __param(0, (0, common_1.Param)('id_guru')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "showByGuruId", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_guru')),
    __param(2, (0, common_1.Body)('ruang')),
    __param(3, (0, common_1.Body)('tanggal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JadwalController.prototype, "delete", null);
JadwalController = __decorate([
    (0, common_1.Controller)('jadwal'),
    __metadata("design:paramtypes", [jadwal_service_1.JadwalService])
], JadwalController);
exports.JadwalController = JadwalController;
//# sourceMappingURL=jadwal.controller.js.map