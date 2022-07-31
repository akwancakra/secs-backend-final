import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User>;
    findEmail(condition: string): Promise<User>;
    findId(condition: number): Promise<User>;
    update(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    showAllData(): Promise<User[]>;
}
