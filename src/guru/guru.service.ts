/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Guru } from './guru.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuruService {
    constructor(
        @InjectRepository(Guru) private readonly guruRepository: Repository<Guru>
    ){}

    async create(data: any): Promise<Guru> {
        return this.guruRepository.save(data)
    }

    async findNip(condition: any): Promise<Guru> {
        return this.guruRepository.findOne({where: {nip: condition}})
    }

    async findUser(condition: any): Promise<Guru> {
        return this.guruRepository.findOne({where: {userId: condition}})
    }

    async findId(condition: any): Promise<Guru> {
        return this.guruRepository.findOne({where: {id: condition}})
    }

    async showAllData() {
        return this.guruRepository.find()
    }

    async update(id: number, data: any) {
        return this.guruRepository.update(id, data)
    }

    async delete(id: number) {
        return this.guruRepository.delete(id)
    }
}
