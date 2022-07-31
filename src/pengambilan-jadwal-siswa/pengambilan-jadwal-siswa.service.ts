import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PengambilanJadwalSiswa } from './pengambilan-jadwal-siswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PengambilanJadwalSiswaService {
    constructor(
        @InjectRepository(PengambilanJadwalSiswa) private readonly jadwalSiswaRepository: Repository<PengambilanJadwalSiswa>
    ){}

    async create(data: any): Promise<PengambilanJadwalSiswa> {
        return this.jadwalSiswaRepository.save(data)
    }

    async findSiswa(condition: any): Promise<PengambilanJadwalSiswa> {
        return this.jadwalSiswaRepository.findOne({where: {id_siswa: condition}})
    }

    async findJadwal(condition: any): Promise<PengambilanJadwalSiswa> {
        return this.jadwalSiswaRepository.findOne({where: {id_jadwal: condition}})
    }

    async showAllData() {
        return this.jadwalSiswaRepository.find()
    }

    async update(id: number, data: any) {
        return this.jadwalSiswaRepository.update(id, data)
    }

    async delete(id: number) {
        return this.jadwalSiswaRepository.delete(id)
    }
}
