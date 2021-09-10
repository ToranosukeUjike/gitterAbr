import { Post, Scalars } from "../type";
export interface IPostMastRepository {
    createPostMast(post: Post): Promise<Post>;
    updatePostMast(post: Post): Promise<Post>;
    deletePostMast(post: Post): Promise<Post>;
    fetchPostMastByCompanyID(companyID: Scalars['ID']): Post[];
    fetchPostsMastByUsername(username: Scalars['ID']): Post[];
}
