/* eslint-disable prettier/prettier */
import { Jadwal } from "src/jadwal/jadwal.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('guru')
export class Guru {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    mata_pelajaranId: number;

    @Column()
    nama: string;

    @Column()
    nip: string;

    @Column()
    photo: string;

    @Column()
    jenis_kelamin: string;

    @Column()
    agama: string;

    @OneToMany(() => Jadwal, (jadwal) => jadwal)
    jadwal: Jadwal[]
}