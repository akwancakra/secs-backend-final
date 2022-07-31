/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Siswa } from './siswa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiswaService {
    constructor(
        @InjectRepository(Siswa) private readonly siswaRepository: Repository<Siswa>
    ){}

    async create(data: any): Promise<Siswa> {
        return this.siswaRepository.save(data)
    }

    async showAllData() {
        return this.siswaRepository.find()
    }

    async findNis(condition: any): Promise<Siswa> {
        return this.siswaRepository.findOne({where: {nis: condition}})
    }

    async findUser(condition: any): Promise<Siswa> {
        return this.siswaRepository.findOne({where: {id_user: condition}})
    }

    async findId(condition: any): Promise<Siswa> {
        return this.siswaRepository.findOne({where: {id: condition}})
    }
    
    async search(condition: any): Promise<Siswa> {
        return this.siswaRepository.findOne(
            {where: [
                {nama_siswa: condition},
                {nis: condition}
            ]
        })
    }

    async update(id: number, data: any) {
        return this.siswaRepository.update(id, data)
    }

    async delete(id: number) {
        return this.siswaRepository.delete(id)
    }
}
