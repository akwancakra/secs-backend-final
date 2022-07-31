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
exports.MataPelajaranController = void 0;
const common_1 = require("@nestjs/common");
const mata_pelajaran_service_1 = require("./mata-pelajaran.service");
let MataPelajaranController = class MataPelajaranController {
    constructor(mapelService) {
        this.mapelService = mapelService;
    }
    async create(nama) {
        const createMapel = await this.mapelService.create({ nama });
        return createMapel;
    }
    async showData() {
        const mapel = await this.mapelService.showAllData();
        return mapel;
    }
    async showDataById(id) {
        const mapel = await this.mapelService.findId(id);
        return mapel;
    }
    async update(id, nama) {
        const updateMapel = await this.mapelService.update(id, {
            nama
        });
        return updateMapel;
    }
    async delete(id) {
        await this.mapelService.delete(id);
        return {
            message: `id:${id} berhasil dihapus`
        };
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('nama')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MataPelajaranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MataPelajaranController.prototype, "showData", null);
__decorate([
    (0, common_1.Get)('data-id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MataPelajaranController.prototype, "showDataById", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('nama')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MataPelajaranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MataPelajaranController.prototype, "delete", null);
MataPelajaranController = __decorate([
    (0, common_1.Controller)('mata-pelajaran'),
    __metadata("design:paramtypes", [mata_pelajaran_service_1.MataPelajaranService])
], MataPelajaranController);
exports.MataPelajaranController = MataPelajaranController;
//# sourceMappingURL=mata-pelajaran.controller.js.map