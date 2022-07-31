/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MataPelajaranService } from './mata-pelajaran.service';

@Controller('mata-pelajaran')
export class MataPelajaranController {
    constructor(
        private readonly mapelService: MataPelajaranService
    ){}

    @Post('create')
    async create(
        @Body('nama') nama: string,
    ){
        const createMapel = await this.mapelService.create({nama})

        return createMapel
    }

    @Get('data')
    async showData(){
        const mapel = await this.mapelService.showAllData()

        return mapel
    }

    @Get('data-id')
    async showDataById(@Param('id') id: number){
        const mapel = await this.mapelService.findId(id)

        return mapel
    }
    
    @Get('search')
    async search(@Param('datasearch') datasearch: string){
        const show = await this.mapelService.search(datasearch)

        return show
    }

    @Patch('update')
    async update(
        @Param('id') id: number,
        @Body('nama') nama: string
        ){
            const updateMapel = await this.mapelService.update(id, {
                nama
            })
            
        return updateMapel
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.mapelService.delete(id)

        return{
            message: `id:${id} berhasil dihapus`
        }
    }
}
