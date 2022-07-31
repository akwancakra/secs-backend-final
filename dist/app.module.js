"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const role_module_1 = require("./role/role.module");
const typeorm_1 = require("@nestjs/typeorm");
const jadwal_module_1 = require("./jadwal/jadwal.module");
const mata_pelajaran_module_1 = require("./mata-pelajaran/mata-pelajaran.module");
const pengambilan_jadwal_siswa_module_1 = require("./pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.module");
const admin_module_1 = require("./admin/admin.module");
const nilai_module_1 = require("./nilai/nilai.module");
const guru_module_1 = require("./guru/guru.module");
const siswa_module_1 = require("./siswa/siswa.module");
const api_module_1 = require("./api/api.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'aplis',
                autoLoadEntities: true,
            }),
            user_module_1.UserModule,
            role_module_1.RoleModule,
            jadwal_module_1.JadwalModule,
            mata_pelajaran_module_1.MataPelajaranModule,
            pengambilan_jadwal_siswa_module_1.PengambilanJadwalSiswaModule,
            admin_module_1.AdminModule,
            nilai_module_1.NilaiModule,
            guru_module_1.GuruModule,
            siswa_module_1.SiswaModule,
            api_module_1.ApiModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map