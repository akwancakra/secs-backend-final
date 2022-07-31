import { MataPelajaran } from './mata-pelajaran.entity';
import { Repository } from 'typeorm';
export declare class MataPelajaranService {
    private readonly mapelRepository;
    constructor(mapelRepository: Repository<MataPelajaran>);
    create(data: any): Promise<MataPelajaran>;
    findId(condition: any): Promise<MataPelajaran>;
    showAllData(): Promise<MataPelajaran[]>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
