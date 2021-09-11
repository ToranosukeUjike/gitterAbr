import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
export declare class userModel {
    userMastRepository: IUserMastRepository;
    companyMastRepository: ICompanyMastRepository;
    user: User;
    constructor(userMastRepository: IUserMastRepository, companyMastRepository: ICompanyMastRepository, user: User);
    static getBlanc(username: Scalars['ID']): User;
    setUser(user: User): void;
    createProfile(): string;
    updateProfile(): Promise<string>;
    get username(): Scalars['ID'];
    set username(input: Scalars['ID']);
    get name(): string;
    set name(input: string);
    get bio(): string;
    set bio(input: string);
    get companyID(): Scalars['ID'];
    set companyID(input: Scalars['ID']);
}
