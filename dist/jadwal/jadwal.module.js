"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalModule = void 0;
const common_1 = require("@nestjs/common");
const jadwal_controller_1 = require("./jadwal.controller");
const jadwal_service_1 = require("./jadwal.service");
const typeorm_1 = require("@nestjs/typeorm");
const jadwal_entity_1 = require("./jadwal.entity");
let JadwalModule = class JadwalModule {
};
JadwalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([jadwal_entity_1.Jadwal])
        ],
        controllers: [jadwal_controller_1.JadwalController],
        providers: [jadwal_service_1.JadwalService],
        exports: [jadwal_service_1.JadwalService]
    })
], JadwalModule);
exports.JadwalModule = JadwalModule;
//# sourceMappingURL=jadwal.module.js.map