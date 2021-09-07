import { Scalars, User } from "../type";

export interface IUserMastRepository {
    createUserProfile(user: User): void;
    updateUserProfile(user: User): void;
    deleteUserProfile(user: User): void;

    fetchUserProfile(username: Scalars['ID']): User;
}