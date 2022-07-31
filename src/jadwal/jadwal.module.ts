import { Module } from '@nestjs/common';
import { JadwalController } from './jadwal.controller';
import { JadwalService } from './jadwal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jadwal } from './jadwal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Jadwal])
  ],
  controllers: [JadwalController],
  providers: [JadwalService],
  exports: [JadwalService]
})
export class JadwalModule {}
