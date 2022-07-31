import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pengambilan_jadwal_siswa')
export class PengambilanJadwalSiswa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_siswa: number;

    @Column()
    id_jadwal: number;
}