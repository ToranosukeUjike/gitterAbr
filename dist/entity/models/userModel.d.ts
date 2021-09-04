import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
export declare class userModel {
    userMastRepository: IUserMastRepository;
    user: User;
    constructor(userMastRepository: IUserMastRepository, user: User);
    static getBlanc(): User;
    createProfile(companyID: Scalars['ID'], username: string): string;
}
