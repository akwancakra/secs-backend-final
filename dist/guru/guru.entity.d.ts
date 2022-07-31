import { Jadwal } from "src/jadwal/jadwal.entity";
export declare class Guru {
    id: number;
    userId: number;
    mata_pelajaranId: number;
    nama: string;
    nip: string;
    photo: string;
    jenis_kelamin: string;
    agama: string;
    jadwal: Jadwal[];
}
