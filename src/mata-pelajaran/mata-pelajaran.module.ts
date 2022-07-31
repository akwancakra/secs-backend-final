import { Module } from '@nestjs/common';
import { MataPelajaranController } from './mata-pelajaran.controller';
import { MataPelajaranService } from './mata-pelajaran.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MataPelajaran } from './mata-pelajaran.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MataPelajaran])
  ],
  controllers: [MataPelajaranController],
  providers: [MataPelajaranService],
  exports: [MataPelajaranService]
})
export class MataPelajaranModule {}
