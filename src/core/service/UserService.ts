import { IUserService } from "./abstraction/IUserService";

export class UserService implements IUserService {
    

    public async signIn(): Promise<string> {
        return "Singin success"
    }
    public async signUp(): Promise<string> {
        return "Singin success"
    }
}