import { Post, Scalars, User } from "../type";
export interface IPostMastRepository {
    createPostMast(post: Post): Promise<Post>;
    updatePostMast(post: Post): Promise<Post>;
    deletePostMast(post: Post): Promise<Post>;
    fetchPostMastByUser(user: User): Promise<Post[]>;
    fetchPostMastByCompanyID(companyID: Scalars['ID']): Promise<Post[]>;
    fetchPostsMastByUsername(username: Scalars['ID']): Promise<Post[]>;
}
