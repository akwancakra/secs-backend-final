import { PengambilanJadwalSiswaService } from './pengambilan-jadwal-siswa.service';
export declare class PengambilanJadwalSiswaController {
    private readonly jadwalSiswaService;
    constructor(jadwalSiswaService: PengambilanJadwalSiswaService);
    create(id_siswa: number, id_jadwal: number): Promise<import("./pengambilan-jadwal-siswa.entity").PengambilanJadwalSiswa>;
    showData(): Promise<import("./pengambilan-jadwal-siswa.entity").PengambilanJadwalSiswa[]>;
    showJadwalSiswa(id_siswa: number): Promise<import("./pengambilan-jadwal-siswa.entity").PengambilanJadwalSiswa>;
    showInfoJadwal(id_jadwal: number): Promise<import("./pengambilan-jadwal-siswa.entity").PengambilanJadwalSiswa>;
    update(id: number, id_siswa: number, id_jadwal: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
