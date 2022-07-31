/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column()
    nama: string;
}