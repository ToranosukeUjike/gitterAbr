import { Scalars, User } from "../type";

export interface IUserMastRepository {
    createUserProfile(user: User): void;
    updateUserProfile(user: User): void;
    deleteUserProfile(user: User): void;
    
    // 仮で返り血をvoidにしてます
    fetchUserProfileMastByUsername(username: Scalars['ID']): Promise<User>;
    fetchUserProfileMastByPostID(postID: Scalars['ID']): Promise<User>;
    fetchUsersProfileMastByCompanyID(companyID: Scalars['ID']): Promise<User[]>;
}