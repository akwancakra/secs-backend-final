/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { NilaiService } from './nilai.service';

@Controller('nilai')
export class NilaiController {
    constructor(
        private readonly nilaiService: NilaiService
    ){}

    @Post('create')
    async create(
        @Body('id_jadwal') id_jadwal: number,
        @Body('id_siswa') id_siswa: number,
        @Body('nilai') nilai: number
    ){
        await this.nilaiService.create({
            id_jadwal,
            id_siswa,
            nilai
        })

        return {
            message: nilai
        } 
    }

    @Get('data')
    async showData(){
        const nilai = await this.nilaiService.showAllData()

        return nilai
    }

    @Get('siswa-id')
    async showBySiswaId(@Param('id_siswa') id_siswa: number){
        const show = await this.nilaiService.findSiswa(id_siswa)
    
        return show
    }

    @Get('mapel-id')
    async showByMapelId(@Param('id_jadwal') id_jadwal: number){
        const show = await this.nilaiService.findMapel(id_jadwal)
    
        return show
    }
    
    @Patch('update')
    async update(
        @Param('id') id: number,
        @Body('id_jadwal') id_jadwal: number,
        @Body('id_siswa') id_siswa: number,
        @Body('nilai') nilai: number
    ){
        const updateNilai = await this.nilaiService.update(id, {
            id_jadwal,
            id_siswa,
            nilai
        })

        return updateNilai
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.nilaiService.delete(id)

        return{
            message: `Data dengan id: ${id} Berhasil dihapus`
        }
    }
}
