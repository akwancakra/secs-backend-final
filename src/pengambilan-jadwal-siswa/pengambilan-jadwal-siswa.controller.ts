/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { PengambilanJadwalSiswaService } from './pengambilan-jadwal-siswa.service';

@Controller('pengambilan-jadwal-siswa')
export class PengambilanJadwalSiswaController {
    constructor(
        private readonly jadwalSiswaService: PengambilanJadwalSiswaService
    ){}

    @Post('create')
    async create(
        @Body('id_siswa') id_siswa: number,
        @Body('id_jadwal') id_jadwal: number
    ){
        const createPenjadwalan = await this.jadwalSiswaService.create({
            id_siswa,
            id_jadwal
        })

        return createPenjadwalan
    }

    @Get('jadwal')
    async showData(){
        const penjadwalan = await this.jadwalSiswaService.showAllData()

        return penjadwalan
    }

    @Get('jadwal-siswa')
    async showJadwalSiswa(@Param('id_siswa') id_siswa: number){
        const jadwalSiswa = await this.jadwalSiswaService.findSiswa(id_siswa)

        return jadwalSiswa
    }

    @Get('info-jadwal')
    async showInfoJadwal(@Param('id_jadwal') id_jadwal: number){
        const infoJadwal = await this.jadwalSiswaService.findJadwal(id_jadwal)

        return infoJadwal
    }

    @Patch('update')
    async update(
        @Param('id') id: number,
        @Body('id_siswa') id_siswa: number,
        @Body('id_jadwal') id_jadwal: number
    ){
        const updateJadwalSiswa = await this.jadwalSiswaService.update(id, {
            id_siswa,
            id_jadwal
        })

        return updateJadwalSiswa
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.jadwalSiswaService.delete(id)
        
        return{
            message: `Data pengambilan jadwal siswa dengan id: ${id} berhasil dihapus`
        }
    }
}
