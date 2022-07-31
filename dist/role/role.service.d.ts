import { Role } from './role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(data: any): Promise<Role>;
    showAllData(): Promise<Role[]>;
    findUser(condition: any): Promise<Role>;
    findGuru(): Promise<Role>;
    findSiswa(): Promise<Role>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
