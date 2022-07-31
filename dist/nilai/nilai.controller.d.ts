import { NilaiService } from './nilai.service';
export declare class NilaiController {
    private readonly nilaiService;
    constructor(nilaiService: NilaiService);
    create(id_jadwal: number, id_siswa: number, nilai: number): Promise<{
        message: number;
    }>;
    showData(): Promise<import("./nilai.entity").Nilai[]>;
    showBySiswaId(id_siswa: number): Promise<import("./nilai.entity").Nilai>;
    showByMapelId(id_jadwal: number): Promise<import("./nilai.entity").Nilai>;
    update(id: number, id_jadwal: number, id_siswa: number, nilai: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
