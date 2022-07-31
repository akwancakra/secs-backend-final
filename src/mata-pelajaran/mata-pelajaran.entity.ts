import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mata_pelajaran')
export class MataPelajaran {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama: string;
}