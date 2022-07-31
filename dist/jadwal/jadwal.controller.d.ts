import { JadwalService } from './jadwal.service';
export declare class JadwalController {
    private readonly jadwalService;
    constructor(jadwalService: JadwalService);
    create(id_guru: number, ruang: string, tanggal: string): Promise<{
        message: string;
    }>;
    showData(): Promise<import("./jadwal.entity").Jadwal[]>;
    showByJadwalId(id: number): Promise<import("./jadwal.entity").Jadwal>;
    showByGuruId(id_guru: number): Promise<import("./jadwal.entity").Jadwal>;
    update(id: number, id_guru: number, ruang: string, tanggal: string): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
