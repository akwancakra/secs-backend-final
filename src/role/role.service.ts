/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ){}

    async create(data: any): Promise<Role> {
        return this.roleRepository.save(data)
    }

    async showAllData(){
        return this.roleRepository.find()
    }

    async findUser(condition: any): Promise<Role> {
        return this.roleRepository.findOne({where: {id: condition}})
    }

    async findGuru() {
        return this.roleRepository.findOne({where: {role: "guru"}})
    }

    async findSiswa() {
        return this.roleRepository.findOne({where: {role: "siswa"}})
    }
    
    async update(id: number, data: any) {
        return this.roleRepository.update(id, data)
    }

    async delete(id: number) {
        return this.roleRepository.delete(id)
    }
}
