export interface IAuthService {
    signIn(): Promise<string>;
    signUp(): Promise<string>;
}