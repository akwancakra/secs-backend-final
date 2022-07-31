import { MataPelajaranService } from './mata-pelajaran.service';
export declare class MataPelajaranController {
    private readonly mapelService;
    constructor(mapelService: MataPelajaranService);
    create(nama: string): Promise<import("./mata-pelajaran.entity").MataPelajaran>;
    showData(): Promise<import("./mata-pelajaran.entity").MataPelajaran[]>;
    showDataById(id: number): Promise<import("./mata-pelajaran.entity").MataPelajaran>;
    update(id: number, nama: string): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
