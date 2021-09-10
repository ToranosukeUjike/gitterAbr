import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
export declare class userModel {
    userMastRepository: IUserMastRepository;
    companyMastRepository: ICompanyMastRepository;
    user: User;
    constructor(userMastRepository: IUserMastRepository, companyMastRepository: ICompanyMastRepository, user: User);
    static getBlanc(username: Scalars['ID']): User;
    createProfile(): string;
    updateProfile(): Promise<string>;
    get username(): string;
    set username(input: string);
    get name(): string;
    set name(input: string);
    get bio(): string;
    set bio(input: string);
}
