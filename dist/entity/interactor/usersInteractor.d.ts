import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
import { Scalars, User } from "../type";
export declare class postsInteractor {
    private userMastRepository;
    constructor(userMastRepository: IUserMastRepository);
    fetchUsersByCompanyID(companyID: Scalars['ID']): Promise<User[]>;
    fetchUserByUsername(username: Scalars['ID']): Promise<User>;
    fetchUserByPostID(postID: Scalars['ID']): Promise<User>;
}
