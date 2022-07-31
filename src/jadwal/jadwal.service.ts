/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jadwal } from './jadwal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JadwalService {
    constructor(
        @InjectRepository(Jadwal) private readonly jadwalRepository: Repository<Jadwal>
    ){}

    async create(data: any): Promise<Jadwal> {
        return this.jadwalRepository.save(data)
    }

    async showAllData() {
        return this.jadwalRepository.find({
            relations: {
                guru: true,
            },
        })
    }

    async findJadwal(condition: any): Promise<Jadwal>{
        return this.jadwalRepository.findOne({
            where: {id: condition}, 
            relations: {
                guru: true,
            },
        })
    }

    async findGuru(condition: any): Promise<Jadwal> {
        return this.jadwalRepository.findOne({where: {guruId: condition}})
    }

    async update(id: number, data: any) {
        return this.jadwalRepository.update(id, data)
    }

    async delete(id: number) {
        return this.jadwalRepository.delete(id)
    }
}
