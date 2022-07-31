import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuruController } from './guru.controller';
import { Guru } from './guru.entity';
import { GuruService } from './guru.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Guru])
  ],
  controllers: [GuruController],
  providers: [GuruService],
  exports: [GuruService]
})
export class GuruModule {}
