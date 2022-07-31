/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService){}

    @Post('create')
    async create(
        @Body('role') role: string
    ){
        const createRole = await this.roleService.create({
            role
        })

        return createRole
    }

    @Get('data')
    async showData(){
        const roles = await this.roleService.showAllData()

        return roles
    }

    @Get('data-user')
    async showDataByUser(@Param('id_user') id_user: number){
        const user = await this.roleService.findUser(id_user)

        return user
    }

    @Get('data-guru')
    async showDataByGuru(){
        const guru = await this.roleService.findGuru()

        return guru
    }

    @Get('data-siswa')
    async showDataBySiswa(){
        const siswa = await this.roleService.findSiswa()

        return siswa
    }

    @Patch('update')
    async update(
        @Param('id') id: number,
        @Body('role') role: string
    ){
        const updateRole = await this.roleService.update(id,{
            role
        })

        return updateRole
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.roleService.delete(id)

        return{
            message: `Data role dengan id: ${id} berhasil dihapus`
        }
    }
}