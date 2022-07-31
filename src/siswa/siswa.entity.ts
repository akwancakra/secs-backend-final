/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('siswa')
export class Siswa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column()
    nama: string;

    @Column()
    nis: string;

    @Column()
    photo: string;

    @Column()
    filename: string;

    @Column()
    agama: string;

    @Column()
    jenis_kelamin: string;
}