import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nilai } from './nilai.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NilaiService {
    constructor(
        @InjectRepository(Nilai) private readonly nilaiRepository: Repository<Nilai>
    ){}

    async create(data: any): Promise<Nilai> {
        return this.nilaiRepository.save(data)
    }

    async showAllData() {
        return this.nilaiRepository.find()
    }

    async findSiswa(condition: any): Promise<Nilai> {
        return this.nilaiRepository.findOne({where: {id_siswa: condition}})
    }

    async findMapel(condition: any): Promise<Nilai> {
        return this.nilaiRepository.findOne({where: {id_jadwal: condition}})
    }

    async update(id: number, data: any) {
        return this.nilaiRepository.update(id, data)
    }

    async delete(id: number) {
        return this.nilaiRepository.delete(id)
    }
}
