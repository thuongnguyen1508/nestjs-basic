export interface IUserService {
    signIn(): Promise<string>;
    signUp(): Promise<string>;
}