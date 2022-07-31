/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Res, Delete, Patch} from '@nestjs/common';
import { GuruService } from './guru.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@Controller('guru')
export class GuruController {
    SERVER_URL = 'http://localhost:5000/guru/'
    constructor(
        private readonly guruService: GuruService
    ){}

    @Post('create')
    @UseInterceptors(FileInterceptor('file',
    {
        storage: diskStorage({
            destination: './avatars', 
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    return cb(null, `${randomName}${extname(file.originalname)}`)
                    }
                })
            }
        )
    )
    async create(
        @Body('id_user') id_user: number,
        @Body('nama') nama: string,
        @Body('nip') nip: string,
        @UploadedFile() file,
        @Body('jenis_kelamin') jenis_kelamin: string,
        @Body('agama') agama: string,
        @Body('id_mata_pelajaran') id_mata_pelajaran: number
    ){
        const url = `${this.SERVER_URL}${file.path}`

        const createGuru = await this.guruService.create({
            id_user,
            nama,
            nip,
            photo: url.replace(/\\/g,"/"),
            jenis_kelamin,
            agama,
            id_mata_pelajaran
        })

        return createGuru
    }

    @Get('data')
    async showData(){
        const guru = await this.guruService.showAllData()

        return guru
    }

    @Get('user-id/:id')
    async showByUserId(@Param('id') id_user: number){
        const show = await this.guruService.findUser(id_user)

        return show
    }

    @Get('guru-id/:id')
    async showByGuruId(@Param('id') id: number){
        const show = await this.guruService.findId(id)

        return show
    }

    @Patch('update')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
            destination: './avatars', 
            filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            return cb(null, `${randomName}${extname(file.originalname)}`)
            }
            })
        }
        )
    )
    async update(
        @Param('id') id: number,
        @Body('id_user') id_user: number,
        @Body('nama') nama: string,
        @Body('nip') nip: string,
        @UploadedFile() file,
        @Body('jenis_kelamin') jenis_kelamin: string,
        @Body('agama') agama: string,
        @Body('id_mata_pelajaran') id_mata_pelajaran: number
    ){
        const url = `${this.SERVER_URL}${file.path}`

        const updateGuru = await this.guruService.update(id, {
            id_user,
            nama,
            nip,
            photo: url.replace(/\\/g,"/"),
            jenis_kelamin,
            agama,
            id_mata_pelajaran
        })

        return updateGuru
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number){
        await this.guruService.delete(id)

        return{
            message: `id:${id} berhasil dihapus`
        }
    }

    @Get('avatars/:fileId')
    async getAvatar(
        @Param('fileId') fileId,
        @Res() res
        ): Promise<any> {
            res.sendFile(fileId, {root: 'avatars'})
    }
}
