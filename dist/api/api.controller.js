"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const admin_service_1 = require("../admin/admin.service");
const siswa_service_1 = require("../siswa/siswa.service");
const guru_service_1 = require("../guru/guru.service");
const role_service_1 = require("../role/role.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const mata_pelajaran_service_1 = require("../mata-pelajaran/mata-pelajaran.service");
const jadwal_service_1 = require("../jadwal/jadwal.service");
const pengambilan_jadwal_siswa_service_1 = require("../pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.service");
let ApiController = class ApiController {
    constructor(userService, adminService, siswaService, guruService, roleService, mapelService, jadwalService, jadwalSiswaService, jwtService) {
        this.userService = userService;
        this.adminService = adminService;
        this.siswaService = siswaService;
        this.guruService = guruService;
        this.roleService = roleService;
        this.mapelService = mapelService;
        this.jadwalService = jadwalService;
        this.jadwalSiswaService = jadwalSiswaService;
        this.jwtService = jwtService;
    }
    async register(mata_pelajaranId, role, nama, nomor_induk, agama, alamat, jenis_kelamin, file, username, email, password, confPassword) {
        if (await this.userService.findEmail(email)) {
            throw new common_1.BadRequestException('Email sudah terdaftar!');
        }
        if (role == 3 && await this.siswaService.findNis(nomor_induk)) {
            throw new common_1.BadRequestException('NIS sudah terpakai!');
        }
        else if (role == 2 && await this.guruService.findNip(nomor_induk)) {
            throw new common_1.BadRequestException('NIP sudah terpakai!');
        }
        if (password != confPassword) {
            throw new common_1.BadRequestException('Konfirmasi password harus sama dengan password!');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const createUser = await this.userService.create({
            id_role: role,
            username,
            email,
            password: hashedPassword
        });
        const id_user = createUser.id;
        let foto = '';
        if (file) {
            if (role == 2) {
                foto = `http://localhost:5000/guru/${file.path.replace(/\\/g, "/")}`;
            }
            else if (role == 3) {
                foto = `http://localhost:5000/siswa/${file.path.replace(/\\/g, "/")}`;
            }
            else {
                foto = null;
            }
        }
        else {
            if (role == 2) {
                foto = 'user.png';
            }
            else if (role == 3) {
                foto = 'siswa.png';
            }
        }
        if (role == 1) {
            await this.adminService.create({
                id_user,
                nama: nama
            });
        }
        if (role == 2) {
            await this.guruService.create({
                id_user,
                mata_pelajaranId,
                nama,
                nip: nomor_induk,
                photo: foto,
                jenis_kelamin,
                agama
            });
        }
        if (role == 3) {
            await this.siswaService.create({
                id_user,
                nama,
                nis: nomor_induk,
                photo: foto,
                alamat,
                agama,
                jenis_kelamin
            });
        }
    }
    async login(email, password, response) {
        const user = await this.userService.findEmail(email);
        if (user) {
            if (!await bcrypt.compare(password, user.password)) {
                throw new common_1.BadRequestException('Email atau password salah');
            }
            const jwt = await this.jwtService.signAsync({ id: user.id });
            response.cookie('token', jwt, { httpOnly: true });
            return { isLogged: true, id: user.id, role: user.id_role, username: user.username };
        }
        throw new common_1.BadRequestException('Email atau password salah');
    }
    async token(request) {
        try {
            const cookie = request.cookies['token'];
            const data = await this.jwtService.verifyAsync(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            const user = await this.userService.findId(data.id);
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    async logout(response) {
        response.clearCookie('token');
        return {
            message: 'Berhasil keluar!'
        };
    }
    async daftarJadwal() {
        const guru = await this.guruService.showAllData();
        const jadwal = await this.jadwalService.showAllData();
        const daftarJadwal = [];
        for (const x in guru) {
            for (const y in jadwal) {
                if (jadwal[y].guruId == guru[x].id) {
                    const mapel = await this.mapelService.findId(guru[x].mata_pelajaranId);
                    daftarJadwal.push({
                        id: jadwal[y].id,
                        ruang: jadwal[y].ruang,
                        nama_guru: guru[x].nama,
                        nama_mata_pelajaran: mapel.nama,
                        waktu: jadwal[y].tanggal,
                    });
                }
            }
        }
        return daftarJadwal;
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './avatars',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)('id_mata_pelajaran')),
    __param(1, (0, common_1.Body)('role')),
    __param(2, (0, common_1.Body)('nama')),
    __param(3, (0, common_1.Body)('nomor_induk')),
    __param(4, (0, common_1.Body)('agama')),
    __param(5, (0, common_1.Body)('alamat')),
    __param(6, (0, common_1.Body)('jenis_kelamin')),
    __param(7, (0, common_1.UploadedFile)()),
    __param(8, (0, common_1.Body)('username')),
    __param(9, (0, common_1.Body)('email')),
    __param(10, (0, common_1.Body)('password')),
    __param(11, (0, common_1.Body)('confPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String, String, String, Object, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('token'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "token", null);
__decorate([
    (0, common_1.Delete)('logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('daftar-jadwal'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiController.prototype, "daftarJadwal", null);
ApiController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        admin_service_1.AdminService,
        siswa_service_1.SiswaService,
        guru_service_1.GuruService,
        role_service_1.RoleService,
        mata_pelajaran_service_1.MataPelajaranService,
        jadwal_service_1.JadwalService,
        pengambilan_jadwal_siswa_service_1.PengambilanJadwalSiswaService,
        jwt_1.JwtService])
], ApiController);
exports.ApiController = ApiController;
//# sourceMappingURL=api.controller.js.map