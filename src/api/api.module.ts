import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AdminModule } from '../admin/admin.module';
import { SiswaModule } from '../siswa/siswa.module';
import { GuruModule } from '../guru/guru.module';
import { RoleModule } from '../role/role.module';
import { MataPelajaranModule } from '../mata-pelajaran/mata-pelajaran.module';
import { JadwalModule } from '../jadwal/jadwal.module';
import { PengambilanJadwalSiswaModule } from '../pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
    AdminModule,
    SiswaModule,
    GuruModule,
    RoleModule,
    MataPelajaranModule,
    JadwalModule,
    PengambilanJadwalSiswaModule,
  ],
  controllers: [ApiController],
})
export class ApiModule {}
