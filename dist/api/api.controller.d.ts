import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from '../user/user.service';
import { AdminService } from '../admin/admin.service';
import { SiswaService } from '../siswa/siswa.service';
import { GuruService } from '../guru/guru.service';
import { RoleService } from '../role/role.service';
import { MataPelajaranService } from '../mata-pelajaran/mata-pelajaran.service';
import { JadwalService } from '../jadwal/jadwal.service';
import { PengambilanJadwalSiswaService } from '../pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.service';
export declare class ApiController {
    private readonly userService;
    private readonly adminService;
    private readonly siswaService;
    private readonly guruService;
    private readonly roleService;
    private readonly mapelService;
    private readonly jadwalService;
    private readonly jadwalSiswaService;
    private jwtService;
    constructor(userService: UserService, adminService: AdminService, siswaService: SiswaService, guruService: GuruService, roleService: RoleService, mapelService: MataPelajaranService, jadwalService: JadwalService, jadwalSiswaService: PengambilanJadwalSiswaService, jwtService: JwtService);
    register(mata_pelajaranId: number, role: number, nama: string, nomor_induk: string, agama: string, alamat: string, jenis_kelamin: string, file: any, username: string, email: string, password: string, confPassword: string): Promise<void>;
    login(email: string, password: string, response: Response): Promise<{
        isLogged: boolean;
        id: number;
        role: number;
        username: string;
    }>;
    token(request: Request): Promise<{
        id: number;
        id_role: number;
        username: string;
        email: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    daftarJadwal(): Promise<{
        id: number;
        ruang: string;
        nama_guru: string;
        nama_mata_pelajaran: string;
        waktu: string;
    }[]>;
}
