import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_role: number;

    @Column()
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;
}