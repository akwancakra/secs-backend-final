import { Nilai } from './nilai.entity';
import { Repository } from 'typeorm';
export declare class NilaiService {
    private readonly nilaiRepository;
    constructor(nilaiRepository: Repository<Nilai>);
    create(data: any): Promise<Nilai>;
    showAllData(): Promise<Nilai[]>;
    findSiswa(condition: any): Promise<Nilai>;
    findMapel(condition: any): Promise<Nilai>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
