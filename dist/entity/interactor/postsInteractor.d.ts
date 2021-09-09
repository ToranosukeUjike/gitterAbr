import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
import { Scalars, Post } from "../type";
export declare class postsInteractor {
    private postMastRepository;
    constructor(postMastRepository: IPostMastRepository);
    fetchPostsByCompanyID(companyID: Scalars['ID']): Promise<Post[]>;
    fetchPostsByUsername(username: Scalars['ID']): Promise<Post[]>;
}