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
exports.PengambilanJadwalSiswaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pengambilan_jadwal_siswa_entity_1 = require("./pengambilan-jadwal-siswa.entity");
const typeorm_2 = require("typeorm");
let PengambilanJadwalSiswaService = class PengambilanJadwalSiswaService {
    constructor(jadwalSiswaRepository) {
        this.jadwalSiswaRepository = jadwalSiswaRepository;
    }
    async create(data) {
        return this.jadwalSiswaRepository.save(data);
    }
    async findSiswa(condition) {
        return this.jadwalSiswaRepository.findOne({ where: { id_siswa: condition } });
    }
    async findJadwal(condition) {
        return this.jadwalSiswaRepository.findOne({ where: { id_jadwal: condition } });
    }
    async showAllData() {
        return this.jadwalSiswaRepository.find();
    }
    async update(id, data) {
        return this.jadwalSiswaRepository.update(id, data);
    }
    async delete(id) {
        return this.jadwalSiswaRepository.delete(id);
    }
};
PengambilanJadwalSiswaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pengambilan_jadwal_siswa_entity_1.PengambilanJadwalSiswa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PengambilanJadwalSiswaService);
exports.PengambilanJadwalSiswaService = PengambilanJadwalSiswaService;
//# sourceMappingURL=pengambilan-jadwal-siswa.service.js.map