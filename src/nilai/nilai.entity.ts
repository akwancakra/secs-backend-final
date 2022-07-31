import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('nilai')
export class Nilai {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_jadwal: number;

    @Column()
    id_siswa: number;

    @Column()
    nilai: number;
}