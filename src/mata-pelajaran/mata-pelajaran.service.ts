import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MataPelajaran } from './mata-pelajaran.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MataPelajaranService {
    constructor(
        @InjectRepository(MataPelajaran) private readonly mapelRepository: Repository<MataPelajaran>
    ){}

    async create(data: any): Promise<MataPelajaran> {
        return this.mapelRepository.save(data)
    }

    async findId(condition: any): Promise<MataPelajaran> {
        return this.mapelRepository.findOne({where: {id: condition}})
    }

    async showAllData() {
        return this.mapelRepository.find()
    }
    
    async search(condition: any): Promise<MataPelajaran> {
        return this.mapelRepository.findOne({where: {nama_mata_pelajaran: condition}})
    }

    async update(id: number, data: any) {
        return this.mapelRepository.update(id, data)
    }

    async delete(id: number) {
        return this.mapelRepository.delete(id)
    }
}
