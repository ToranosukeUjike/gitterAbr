import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
import { Scalars, Post, User } from "../type";
export declare class postsInteractor {
    private postMastRepository;
    constructor(postMastRepository: IPostMastRepository);
    fetchPostsByUser(user: User): Promise<Post[]>;
    fetchPostsByCompanyID(companyID: Scalars['ID']): Promise<Post[]>;
    fetchPostsByUsername(username: Scalars['ID']): Promise<Post[]>;
}
