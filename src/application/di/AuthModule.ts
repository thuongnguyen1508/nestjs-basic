import { Module, Provider } from '@nestjs/common';
import { AuthController } from '../api/AuthController';
import { AuthService } from 'src/core/service/AuthService';
import { DITokens } from 'src/core/domain/DITokens';
import { UserService } from 'src/core/service/UserService';

const serviceProvider : Provider[] = [
    {
        provide: DITokens.IAuthService,
        useClass: AuthService,
    },
    {
        provide: DITokens.IUserService,
        useClass: UserService,
    }
]
@Module({
    controllers: [AuthController],
    providers: [
        ...serviceProvider
    ],
    exports: [DITokens.IAuthService],
})
export class AuthModule {}