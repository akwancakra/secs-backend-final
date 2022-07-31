/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, BadRequestException, Res, Req, Param, UnauthorizedException, Patch, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'
import { AdminService } from '../admin/admin.service';
import { SiswaService } from '../siswa/siswa.service';
import { GuruService } from '../guru/guru.service';
import { RoleService } from '../role/role.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { MataPelajaranService } from '../mata-pelajaran/mata-pelajaran.service';
import { JadwalService } from '../jadwal/jadwal.service';
import { PengambilanJadwalSiswaService } from '../pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.service';

@Controller('api')
export class ApiController {
    constructor(
        private readonly userService: UserService,
        private readonly adminService: AdminService,
        private readonly siswaService: SiswaService,
        private readonly guruService: GuruService,
        private readonly roleService: RoleService,
        private readonly mapelService: MataPelajaranService,
        private readonly jadwalService: JadwalService,
        private readonly jadwalSiswaService: PengambilanJadwalSiswaService,
        private jwtService: JwtService
    ){}

    @Post('register')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
        destination: './avatars', 
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        return cb(null, `${randomName}${extname(file.originalname)}`)
        }})
    }))
    async register(
        @Body('id_mata_pelajaran') mata_pelajaranId: number,
        @Body('role') role: number,
        @Body('nama') nama: string,
        @Body('nomor_induk') nomor_induk: string,
        @Body('agama') agama: string,
        @Body('alamat') alamat: string,
        @Body('jenis_kelamin') jenis_kelamin: string,
        @UploadedFile() file,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('confPassword') confPassword: string
    ){
        if(await this.userService.findEmail(email)){
            throw new BadRequestException('Email sudah terdaftar!')
        }

        if(role == 3 && await this.siswaService.findNis(nomor_induk)){
            throw new BadRequestException('NIS sudah terpakai!')
        } else if (role == 2 && await this.guruService.findNip(nomor_induk)){
            throw new BadRequestException('NIP sudah terpakai!')
        }

        if(password != confPassword){
            throw new BadRequestException('Konfirmasi password harus sama dengan password!')
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const createUser = await this.userService.create({
            id_role: role,
            username,
            email,
            password: hashedPassword
        })
        const id_user = createUser.id

        let foto = '';
        if(file){
            if (role == 2) {
                foto = `http://localhost:5000/guru/${file.path.replace(/\\/g,"/")}`;
            } else if (role == 3){
                foto = `http://localhost:5000/siswa/${file.path.replace(/\\/g,"/")}`;
            } else{
                foto = null;
            }
        } else {
            if (role == 2) {
                foto = 'user.png';
            } else if (role == 3){
                foto = 'siswa.png';
            }
        }

        if(role == 1){
            await this.adminService.create({
                id_user,
                nama: nama
            })
        }

        if(role == 2){
            await this.guruService.create({
                id_user,
                mata_pelajaranId,
                nama,
                nip: nomor_induk,
                photo: foto,
                jenis_kelamin,
                agama
            })
        }

        if(role == 3){
            await this.siswaService.create({
                id_user,
                nama,
                nis: nomor_induk,
                photo: foto,
                alamat,
                agama,
                jenis_kelamin
            })
        }
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ){
        const user = await this.userService.findEmail(email)

        if(user){
            if(!await bcrypt.compare(password, user.password)){
                throw new BadRequestException('Email atau password salah')
            }

            const jwt = await this.jwtService.signAsync({id: user.id})
            response.cookie('token', jwt, {httpOnly: true})
            return {isLogged: true, id: user.id, role: user.id_role, username: user.username}
        }

        throw new BadRequestException('Email atau password salah')
    }

    @Get('token')
    async token(@Req() request: Request){
        try {
            const cookie = request.cookies['token']
            const data = await this.jwtService.verifyAsync(cookie)

            if (!data) {
                throw new UnauthorizedException()
            }
            
            const user = await this.userService.findId(data.id)
            const {password, ...result} = user

            return result
        } catch (error) {
            throw new UnauthorizedException()
        }
    }

    @Delete('logout')
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('token')

        return{
            message: 'Berhasil keluar!'
        }
    }

    @Get('daftar-jadwal')
    async daftarJadwal(){
        const guru = await this.guruService.showAllData()
        const jadwal = await this.jadwalService.showAllData()
        const daftarJadwal:{
            id: number,
            ruang: string,
            nama_guru: string,
            nama_mata_pelajaran: string,
            waktu: string
        }[] = []
        for(const x in guru){
            for(const y in jadwal){
                if(jadwal[y].guruId == guru[x].id){
                    const mapel = await this.mapelService.findId(guru[x].mata_pelajaranId)
                    daftarJadwal.push({
                        id: jadwal[y].id,
                        ruang: jadwal[y].ruang,
                        nama_guru: guru[x].nama,
                        nama_mata_pelajaran: mapel.nama,
                        waktu: jadwal[y].tanggal,
                    })
                }
            }
        }
        return daftarJadwal
    }
}