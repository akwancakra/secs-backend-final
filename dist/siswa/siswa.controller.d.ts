import { SiswaService } from './siswa.service';
export declare class SiswaController {
    private readonly siswaService;
    SERVER_URL: string;
    constructor(siswaService: SiswaService);
    create(id_user: number, nama: string, nis: string, file: any, alamat: string, agama: string, jenis_kelamin: string): Promise<import("./siswa.entity").Siswa>;
    showData(): Promise<import("./siswa.entity").Siswa[]>;
    showByUserId(id_user: number): Promise<import("./siswa.entity").Siswa>;
    showByGuruId(id: number): Promise<import("./siswa.entity").Siswa>;
    updateImg(id: number, file: any): Promise<import("typeorm").UpdateResult>;
    update(id: number, nama: string, nis: string, agama: string, jenis_kelamin: string): Promise<import("typeorm").UpdateResult>;
    deleteImg(id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getAvatar(fileId: any, res: any): Promise<any>;
}
