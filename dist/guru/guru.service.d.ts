import { Guru } from './guru.entity';
import { Repository } from 'typeorm';
export declare class GuruService {
    private readonly guruRepository;
    constructor(guruRepository: Repository<Guru>);
    create(data: any): Promise<Guru>;
    findNip(condition: any): Promise<Guru>;
    findUser(condition: any): Promise<Guru>;
    findId(condition: any): Promise<Guru>;
    showAllData(): Promise<Guru[]>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
