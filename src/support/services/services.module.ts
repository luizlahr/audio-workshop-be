import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BcryptHasher } from './bcrypt-hasher.service';
import { NestJsJwtService } from './nestjs-jwt.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [PrismaService, JwtService, BcryptHasher, NestJsJwtService],
  exports: [PrismaService, JwtService, BcryptHasher, NestJsJwtService],
  imports: [],
})
export class ServicesModule {}
