import { GuruService } from './guru.service';
export declare class GuruController {
    private readonly guruService;
    SERVER_URL: string;
    constructor(guruService: GuruService);
    create(id_user: number, nama: string, nip: string, file: any, jenis_kelamin: string, agama: string, id_mata_pelajaran: number): Promise<import("./guru.entity").Guru>;
    showData(): Promise<import("./guru.entity").Guru[]>;
    showByUserId(id_user: number): Promise<import("./guru.entity").Guru>;
    showByGuruId(id: number): Promise<import("./guru.entity").Guru>;
    update(id: number, id_user: number, nama: string, nip: string, file: any, jenis_kelamin: string, agama: string, id_mata_pelajaran: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getAvatar(fileId: any, res: any): Promise<any>;
}
