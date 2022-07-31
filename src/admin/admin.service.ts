/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin) private readonly adminRepository: Repository<Admin>
    ){}

    async create(data: any): Promise<Admin> {
        return this.adminRepository.save(data)
    }

    async showAllData() {
        return this.adminRepository.find()
    }

    async findUser(condition: any): Promise<Admin> {
        return this.adminRepository.findOne({where: {id_user: condition}})
    }

    async update(id: number, data: any) {
        return this.adminRepository.update(id, data)
    }

    async delete(id: number) {
        return this.adminRepository.delete(id)
    }
}
