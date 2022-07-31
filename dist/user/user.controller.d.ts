import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(id_role: string, username: string, email: string, password: string): Promise<number>;
    showData(): Promise<import("./user.entity").User[]>;
    showDataById(id: number): Promise<import("./user.entity").User>;
    update(id: number, username: string, email: string, password: string, confPassword: string): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
