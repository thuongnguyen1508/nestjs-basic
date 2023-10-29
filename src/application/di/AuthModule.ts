import { Module } from '@nestjs/common';
import { AuthController } from '../api/AuthController';

@Module({
    controllers: [AuthController]
})
export class AuthModule {}