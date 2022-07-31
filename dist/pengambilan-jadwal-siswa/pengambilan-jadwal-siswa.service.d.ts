import { PengambilanJadwalSiswa } from './pengambilan-jadwal-siswa.entity';
import { Repository } from 'typeorm';
export declare class PengambilanJadwalSiswaService {
    private readonly jadwalSiswaRepository;
    constructor(jadwalSiswaRepository: Repository<PengambilanJadwalSiswa>);
    create(data: any): Promise<PengambilanJadwalSiswa>;
    findSiswa(condition: any): Promise<PengambilanJadwalSiswa>;
    findJadwal(condition: any): Promise<PengambilanJadwalSiswa>;
    showAllData(): Promise<PengambilanJadwalSiswa[]>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
