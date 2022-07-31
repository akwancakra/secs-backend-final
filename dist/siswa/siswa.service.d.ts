import { Siswa } from './siswa.entity';
import { Repository } from 'typeorm';
export declare class SiswaService {
    private readonly siswaRepository;
    constructor(siswaRepository: Repository<Siswa>);
    create(data: any): Promise<Siswa>;
    showAllData(): Promise<Siswa[]>;
    findNis(condition: any): Promise<Siswa>;
    findUser(condition: any): Promise<Siswa>;
    findId(condition: any): Promise<Siswa>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
