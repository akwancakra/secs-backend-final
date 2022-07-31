import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JadwalModule } from './jadwal/jadwal.module';
import { MataPelajaranModule } from './mata-pelajaran/mata-pelajaran.module';
import { PengambilanJadwalSiswaModule } from './pengambilan-jadwal-siswa/pengambilan-jadwal-siswa.module';
import { AdminModule } from './admin/admin.module';
import { NilaiModule } from './nilai/nilai.module';
import { GuruModule } from './guru/guru.module';
import { SiswaModule } from './siswa/siswa.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'aplis',
      autoLoadEntities: true,
      // synchronize: true,
    }),
    UserModule,
    RoleModule,
    JadwalModule,
    MataPelajaranModule,
    PengambilanJadwalSiswaModule,
    AdminModule,
    NilaiModule,
    GuruModule,
    SiswaModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
