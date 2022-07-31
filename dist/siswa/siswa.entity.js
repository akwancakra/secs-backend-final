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
exports.Siswa = void 0;
const typeorm_1 = require("typeorm");
let Siswa = class Siswa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Siswa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Siswa.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "nis", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "agama", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Siswa.prototype, "jenis_kelamin", void 0);
Siswa = __decorate([
    (0, typeorm_1.Entity)('siswa')
], Siswa);
exports.Siswa = Siswa;
//# sourceMappingURL=siswa.entity.js.map