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
exports.MataPelajaranService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mata_pelajaran_entity_1 = require("./mata-pelajaran.entity");
const typeorm_2 = require("typeorm");
let MataPelajaranService = class MataPelajaranService {
    constructor(mapelRepository) {
        this.mapelRepository = mapelRepository;
    }
    async create(data) {
        return this.mapelRepository.save(data);
    }
    async findId(condition) {
        return this.mapelRepository.findOne({ where: { id: condition } });
    }
    async showAllData() {
        return this.mapelRepository.find();
    }
    async update(id, data) {
        return this.mapelRepository.update(id, data);
    }
    async delete(id) {
        return this.mapelRepository.delete(id);
    }
};
MataPelajaranService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mata_pelajaran_entity_1.MataPelajaran)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MataPelajaranService);
exports.MataPelajaranService = MataPelajaranService;
//# sourceMappingURL=mata-pelajaran.service.js.map