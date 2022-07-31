/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async create(data: any): Promise<User> {
        return this.userRepository.save(data)
    }

    async findEmail(condition: string): Promise<User> {
        return this.userRepository.findOne({where: {email: condition}})
    }

    async findId(condition: number): Promise<User> {
        return this.userRepository.findOne({where: {id: condition}})
    }

    async update(id: number, data: any) {
        return this.userRepository.update(id, data)
    }

    async delete(id: number) {
        return this.userRepository.delete(id)
    }

    async showAllData() {
        return this.userRepository.find()
    }
}
