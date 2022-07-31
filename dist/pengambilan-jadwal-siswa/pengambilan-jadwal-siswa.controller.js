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
exports.PengambilanJadwalSiswaController = void 0;
const common_1 = require("@nestjs/common");
const pengambilan_jadwal_siswa_service_1 = require("./pengambilan-jadwal-siswa.service");
let PengambilanJadwalSiswaController = class PengambilanJadwalSiswaController {
    constructor(jadwalSiswaService) {
        this.jadwalSiswaService = jadwalSiswaService;
    }
    async create(id_siswa, id_jadwal) {
        const createPenjadwalan = await this.jadwalSiswaService.create({
            id_siswa,
            id_jadwal
        });
        return createPenjadwalan;
    }
    async showData() {
        const penjadwalan = await this.jadwalSiswaService.showAllData();
        return penjadwalan;
    }
    async showJadwalSiswa(id_siswa) {
        const jadwalSiswa = await this.jadwalSiswaService.findSiswa(id_siswa);
        return jadwalSiswa;
    }
    async showInfoJadwal(id_jadwal) {
        const infoJadwal = await this.jadwalSiswaService.findJadwal(id_jadwal);
        return infoJadwal;
    }
    async update(id, id_siswa, id_jadwal) {
        const updateJadwalSiswa = await this.jadwalSiswaService.update(id, {
            id_siswa,
            id_jadwal
        });
        return updateJadwalSiswa;
    }
    async delete(id) {
        await this.jadwalSiswaService.delete(id);
        return {
            message: `Data pengambilan jadwal siswa dengan id: ${id} berhasil dihapus`
        };
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('id_siswa')),
    __param(1, (0, common_1.Body)('id_jadwal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('jadwal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('jadwal-siswa'),
    __param(0, (0, common_1.Param)('id_siswa')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "showJadwalSiswa", null);
__decorate([
    (0, common_1.Get)('info-jadwal'),
    __param(0, (0, common_1.Param)('id_jadwal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "showInfoJadwal", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('id_siswa')),
    __param(2, (0, common_1.Body)('id_jadwal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengambilanJadwalSiswaController.prototype, "delete", null);
PengambilanJadwalSiswaController = __decorate([
    (0, common_1.Controller)('pengambilan-jadwal-siswa'),
    __metadata("design:paramtypes", [pengambilan_jadwal_siswa_service_1.PengambilanJadwalSiswaService])
], PengambilanJadwalSiswaController);
exports.PengambilanJadwalSiswaController = PengambilanJadwalSiswaController;
//# sourceMappingURL=pengambilan-jadwal-siswa.controller.js.map