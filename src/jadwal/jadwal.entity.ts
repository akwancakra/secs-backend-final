/* eslint-disable prettier/prettier */
import { Guru } from "src/guru/guru.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('jadwal')
export class Jadwal {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // id_guru: number;

    @Column()
    ruang: string;
    
    @Column()
    tanggal: string;

    @ManyToOne(() => Guru, Guru => Guru.id)
    guru: Guru;
    guruId: number;
}