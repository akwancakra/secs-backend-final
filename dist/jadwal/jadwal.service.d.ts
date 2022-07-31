import { Jadwal } from './jadwal.entity';
import { Repository } from 'typeorm';
export declare class JadwalService {
    private readonly jadwalRepository;
    constructor(jadwalRepository: Repository<Jadwal>);
    create(data: any): Promise<Jadwal>;
    showAllData(): Promise<Jadwal[]>;
    findJadwal(condition: any): Promise<Jadwal>;
    findGuru(condition: any): Promise<Jadwal>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
