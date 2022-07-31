import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    create(data: any): Promise<Admin>;
    showAllData(): Promise<Admin[]>;
    findUser(condition: any): Promise<Admin>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
