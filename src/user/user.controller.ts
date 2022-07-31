/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, BadRequestException, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService  
        ){}

    @Post('create')
    async create(
        // @Body('role_id') role_id: string,
        @Body('role') id_role: string,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string
        ){
            if(await this.userService.findEmail(email)){
                throw new BadRequestException('email telah terdaftar')
            }

            const hashedPasword = await bcrypt.hash(password, 12)
            const createUser = await this.userService.create({
                id_role,
                username,
                email,
                password: hashedPasword
            })

        return createUser.id
    }

    @Get('data')
    async showData(){
        const users = await this.userService.showAllData()

        return users
    }

    @Get('data/:id')
    async showDataById(@Param('id') id: number){
        const user = await this.userService.findId(id)

        return user
    }

    @Patch('update/:id')
    async update(
        @Param('id') id: number,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('confPassword') confPassword: string
        ){
            if (password !== confPassword) {
                throw new BadRequestException('Konfirmasi password tidak sama dengan password!')                
            }
            if(await this.userService.findEmail(email)){
                throw new BadRequestException('Email telah terdaftar!')
            }

            const user = await this.userService.findId(id)

            let hashedPasword = ''
            if (password) {
                hashedPasword = await bcrypt.hash(password, 12)
            } else {
                hashedPasword = user.password
            }

            const updateUser = await this.userService.update(id,{
                username,
                email,
                password: hashedPasword
            })

        return updateUser
    }

    @Delete('delete')
    async delete(@Param('id') id: number){
        await this.userService.delete(id)

        return{
            message: `Data user dengan id: ${id} berhasil dihapus`
        }
    }
}