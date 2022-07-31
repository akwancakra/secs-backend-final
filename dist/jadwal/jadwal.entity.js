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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jadwal = void 0;
const guru_entity_1 = require("../guru/guru.entity");
const typeorm_1 = require("typeorm");
let Jadwal = class Jadwal {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Jadwal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jadwal.prototype, "ruang", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jadwal.prototype, "tanggal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => guru_entity_1.Guru, Guru => Guru.id),
    __metadata("design:type", guru_entity_1.Guru)
], Jadwal.prototype, "guru", void 0);
Jadwal = __decorate([
    (0, typeorm_1.Entity)('jadwal')
], Jadwal);
exports.Jadwal = Jadwal;
//# sourceMappingURL=jadwal.entity.js.map