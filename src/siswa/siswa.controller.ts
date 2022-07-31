/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, Res, Delete, Patch} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import * as fs from 'fs'

@Controller('siswa')
export class SiswaController {
    SERVER_URL = 'http://localhost:5000/siswa/'
    constructor(
        private readonly siswaService: SiswaService
    ){}

    @Post('create')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
            destination: './public/image/avatar',
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
        @Body('nis') nis: string,
        @UploadedFile() file,
        @Body('alamat') alamat: string,
        @Body('agama') agama: string,
        @Body('jenis_kelamin') jenis_kelamin:  string
    ){
        const url = `${this.SERVER_URL}${file.path}`

        const createSiswa = await this.siswaService.create({
            id_user,
            nama,
            nis,
            photo: url.replace(/\\/g,"/"),
            alamat,
            agama,
            jenis_kelamin
        })

        return createSiswa
    }

    @Get('data')
    async showData(){
        const siswa = await this.siswaService.showAllData()

        return siswa
    }

    @Get('user-id/:id')
    async showByUserId(@Param('id_user') id_user: number){
        const show = await this.siswaService.findUser(id_user)

        return show
    }

    @Get('siswa-id/:id')
    async showByGuruId(@Param('id') id: number){
        const show = await this.siswaService.findId(id)

        return show
    }

    @Post('update-img/:id')
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
    async updateImg(
        @Param('id') id: number,
        @UploadedFile() file,
    ){
        let url = `${this.SERVER_URL}${file.path}`
        if(file == null){
            url = (await this.siswaService.findId(id)).photo
        }

        const updateSiswa = await this.siswaService.update(id, {
            photo: url.replace(/\\/g,"/"),
            filename: file.path,
        })

        return updateSiswa
    }

    @Patch('update/:id')
    async update(
        @Param('id') id: number,
        @Body('nama') nama: string,
        @Body('nis') nis: string,
        @Body('agama') agama: string,
        @Body('jenis_kelamin') jenis_kelamin: string
    ){
        const updateSiswa = await this.siswaService.update(id, {
            nama,
            nis,
            agama,
            jenis_kelamin
        })

        return updateSiswa
    }

    @Delete('update-img/:id')
    async deleteImg(
        @Param('id') id: number,
    ){
        const deleteImg = await this.siswaService.update(id, {
            photo: 'siswa.png',
            filename: null,
        })

        return deleteImg
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number){
        await this.siswaService.delete(id)

        return{
            message: `Data siswa dengan id: ${id} berhasil dihapus`
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