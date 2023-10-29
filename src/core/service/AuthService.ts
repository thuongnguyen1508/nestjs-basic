import { Inject } from "@nestjs/common";
import { IAuthService } from "./abstraction/IAuthService";
import { DITokens } from "../domain/DITokens";
import { IUserService } from "./abstraction/IUserService";

export class AuthService implements IAuthService {
    constructor(
        @Inject(DITokens.IUserService)
        private readonly userService : IUserService
    ){}

    public async signIn(): Promise<string> {
        return this.userService.signIn();
    }
    public async signUp(): Promise<string> {
        return "Singin success"
    }
}