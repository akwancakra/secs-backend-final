import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(role: string): Promise<import("./role.entity").Role>;
    showData(): Promise<import("./role.entity").Role[]>;
    showDataByUser(id_user: number): Promise<import("./role.entity").Role>;
    showDataByGuru(): Promise<import("./role.entity").Role>;
    showDataBySiswa(): Promise<import("./role.entity").Role>;
    update(id: number, role: string): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
