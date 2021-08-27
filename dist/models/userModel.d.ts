import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
export declare class userModel {
    userMastRepository: IUserMastRepository;
    user: User;
    constructor(userMastRepository: IUserMastRepository, user: User);
    static getBlanc(): User;
    createAccount(companyID: Scalars['ID'], gitterID: Scalars['ID'], name: string): string;
}
