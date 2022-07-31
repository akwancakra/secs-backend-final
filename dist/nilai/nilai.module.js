"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NilaiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nilai_controller_1 = require("./nilai.controller");
const nilai_entity_1 = require("./nilai.entity");
const nilai_service_1 = require("./nilai.service");
let NilaiModule = class NilaiModule {
};
NilaiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([nilai_entity_1.Nilai])
        ],
        controllers: [nilai_controller_1.NilaiController],
        providers: [nilai_service_1.NilaiService]
    })
], NilaiModule);
exports.NilaiModule = NilaiModule;
//# sourceMappingURL=nilai.module.js.map