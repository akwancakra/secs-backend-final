"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const api_controller_1 = require("./api.controller");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const admin_module_1 = require("../admin/admin.module");
const siswa_module_1 = require("../siswa/siswa.module");
const guru_module_1 = require("../guru/guru.module");
const role_module_1 = require("../role/role.module");
const mata_pelajaran_module_1 = require("../mata-pelajaran/mata-pelajaran.module");
const jadwal_module_1 = require("../jadwal/jadwal.module");
const pengambilan_jadwal_siswa_module_1 = require("../pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.module");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1d' },
            }),
            user_module_1.UserModule,
            admin_module_1.AdminModule,
            siswa_module_1.SiswaModule,
            guru_module_1.GuruModule,
            role_module_1.RoleModule,
            mata_pelajaran_module_1.MataPelajaranModule,
            jadwal_module_1.JadwalModule,
            pengambilan_jadwal_siswa_module_1.PengambilanJadwalSiswaModule,
        ],
        controllers: [api_controller_1.ApiController],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map