"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PengambilanJadwalSiswaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pengambilan_jadwal_siswa_controller_1 = require("./pengambilan-jadwal-siswa.controller");
const pengambilan_jadwal_siswa_entity_1 = require("./pengambilan-jadwal-siswa.entity");
const pengambilan_jadwal_siswa_service_1 = require("./pengambilan-jadwal-siswa.service");
let PengambilanJadwalSiswaModule = class PengambilanJadwalSiswaModule {
};
PengambilanJadwalSiswaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pengambilan_jadwal_siswa_entity_1.PengambilanJadwalSiswa])
        ],
        controllers: [pengambilan_jadwal_siswa_controller_1.PengambilanJadwalSiswaController],
        providers: [pengambilan_jadwal_siswa_service_1.PengambilanJadwalSiswaService],
        exports: [pengambilan_jadwal_siswa_service_1.PengambilanJadwalSiswaService]
    })
], PengambilanJadwalSiswaModule);
exports.PengambilanJadwalSiswaModule = PengambilanJadwalSiswaModule;
//# sourceMappingURL=pengambilan-jadwal-siswa.module.js.map