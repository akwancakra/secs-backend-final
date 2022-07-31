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
exports.NilaiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nilai_entity_1 = require("./nilai.entity");
const typeorm_2 = require("typeorm");
let NilaiService = class NilaiService {
    constructor(nilaiRepository) {
        this.nilaiRepository = nilaiRepository;
    }
    async create(data) {
        return this.nilaiRepository.save(data);
    }
    async showAllData() {
        return this.nilaiRepository.find();
    }
    async findSiswa(condition) {
        return this.nilaiRepository.findOne({ where: { id_siswa: condition } });
    }
    async findMapel(condition) {
        return this.nilaiRepository.findOne({ where: { id_jadwal: condition } });
    }
    async update(id, data) {
        return this.nilaiRepository.update(id, data);
    }
    async delete(id) {
        return this.nilaiRepository.delete(id);
    }
};
NilaiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nilai_entity_1.Nilai)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NilaiService);
exports.NilaiService = NilaiService;
//# sourceMappingURL=nilai.service.js.map