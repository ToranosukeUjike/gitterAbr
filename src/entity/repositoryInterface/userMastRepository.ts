import { Scalars, User } from "../type";

export interface IUserMastRepository {
    createUserProfile(user: User): void;
    updateUserProfile(user: User): void;
    deleteUserProfile(user: User): void;
    
    // 仮で返り血をvoidにしてます
    fetchUserProfile(username: Scalars['ID']): void;
}