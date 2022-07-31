/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService: AdminService
    ){}

    @Post('create')
    async create(
        @Body('id_user') id_user: number,
        @Body('nama') nama: string
    ){
        const createAdmin = this.adminService.create({
            id_user,
            nama
        })

        return createAdmin
    }

    @Get('data')
    async showData(){
        const admin = await this.adminService.showAllData()

        return admin
    }

    @Get('user-id/:id')
    async showByUserId(@Param(':id') id_user: number){
        const show = await this.adminService.findUser(id_user)

        return show
    }

    @Patch('update/:id')
    async update(
        @Param('id') id: number,
        @Body('nama') nama: string
    ){
        const updateAdmin = await this.adminService.update(id, {
            nama
        })

        return updateAdmin
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.adminService.delete(id)

        return{
            message: `Data admin dengan id: ${id} berhasil dihapus`
        }
    }
}
