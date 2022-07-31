/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { JadwalService } from './jadwal.service';

@Controller('jadwal')
export class JadwalController {
    constructor(
        private readonly jadwalService: JadwalService
    ){}

    @Post('create')
    async create(
        @Body('id_guru') id_guru: number,
        @Body('ruang') ruang: string,
        @Body('tanggal') tanggal: string,
    ){
        await this.jadwalService.create({
            id_guru,
            ruang,
            tanggal
        })
        
        return {
            message: "Anda berhasil membuat jadwal"
        }
    }

    @Get('data')
    async showData(){
        const jadwal = await this.jadwalService.showAllData()

        return jadwal
    }

    @Get(':id')
    async showByJadwalId(@Param('id') id: number){
        const show = await this.jadwalService.findJadwal(id)

        return show
    }

    @Get('guru-id')
    async showByGuruId(@Param('id_guru') id_guru: number){
        const show = await this.jadwalService.findGuru(id_guru)

        return show
    }

    @Patch('update')
    async update(
        @Param('id') id: number,
        @Body('id_guru') id_guru: number,
        @Body('ruang') ruang: string,
        @Body('tanggal') tanggal: string,
    ){
        const updateJadwal = await this.jadwalService.update(id,{
            id_guru,
            ruang,
            tanggal
        })

        return updateJadwal
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.jadwalService.delete(id)

        return{
            message: `id:${id} berhasil dihapus`
        }
    }
}
