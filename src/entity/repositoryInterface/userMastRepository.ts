import { Scalars, User } from "../type";

export interface IUserMastRepository {
    createUserProfile(user: User): void;
    updateUserProfile(user: User): User;
    deleteUserProfile(user: User): void;

    fetchUserProfile(
        gitterID: Scalars['ID'], 
        companyID: Scalars['ID'],
    ): void;
}