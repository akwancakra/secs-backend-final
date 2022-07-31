import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengambilanJadwalSiswaController } from './pengambilan-jadwal-siswa.controller';
import { PengambilanJadwalSiswa } from './pengambilan-jadwal-siswa.entity';
import { PengambilanJadwalSiswaService } from './pengambilan-jadwal-siswa.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PengambilanJadwalSiswa])
  ],
  controllers: [PengambilanJadwalSiswaController],
  providers: [PengambilanJadwalSiswaService],
  exports: [PengambilanJadwalSiswaService]
})
export class PengambilanJadwalSiswaModule {}
