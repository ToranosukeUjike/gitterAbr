import { User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
export declare class userModel {
    userMastRepository: IUserMastRepository;
    user: User;
    constructor(userMastRepository: IUserMastRepository, user: User);
    static getBlanc(username: string): User;
    createProfile(): string;
    updateProfile(): string;
    get username(): string;
    set username(input: string);
    get name(): string;
    set name(input: string);
    get bio(): string;
    set bio(input: string);
}
