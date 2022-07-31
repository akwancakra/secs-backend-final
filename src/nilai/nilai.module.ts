import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NilaiController } from './nilai.controller';
import { Nilai } from './nilai.entity';
import { NilaiService } from './nilai.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Nilai])
  ],
  controllers: [NilaiController],
  providers: [NilaiService]
})
export class NilaiModule {}
