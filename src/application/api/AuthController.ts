import { Controller, Get, Inject } from '@nestjs/common';
import { DITokens } from 'src/core/domain/DITokens';
import { IAuthService } from 'src/core/service/abstraction/IAuthService';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(DITokens.IAuthService)
        private readonly authService : IAuthService

        ) {}

  @Get()
  public async findAll(): Promise<string> {
    return await this.authService.signIn();
  }
}