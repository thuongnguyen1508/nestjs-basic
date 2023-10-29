import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './AuthModule';

@Module({
  imports: [
    ConfigModule.forRoot( {
        isGlobal: true,
    }),
    AuthModule
    ],
})
export class RootModule {}
