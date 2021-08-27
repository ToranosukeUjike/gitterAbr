import { Scalars, User } from "../type";
export interface IUserMastRepository {
    createUserAccount(user: User): void;
    updateUserAccount(user: User): User;
    deleteUserAccount(user: User): void;
    fetchUserAccount(gitterID: Scalars['ID'], companyID: Scalars['ID']): void;
}
