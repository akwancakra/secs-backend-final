import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(id_user: number, nama: string): Promise<import("./admin.entity").Admin>;
    showData(): Promise<import("./admin.entity").Admin[]>;
    showByUserId(id_user: number): Promise<import("./admin.entity").Admin>;
    update(id: number, nama: string): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
