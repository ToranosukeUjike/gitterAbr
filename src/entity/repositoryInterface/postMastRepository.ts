import { Post, Scalars } from "../type"

export interface IPostMastRepository {
    // Post CRUD
    createPostMast(post: Post): Promise<Post>;
    updatePostMast(post: Post): Promise<Post>;
    deletePostMast(post: Post): Promise<Post>;

    // Post読み込み
    fetchPostMastByCompanyID(companyID: Scalars['ID']): Post[];
    fetchPostsMastByUsername(username: Scalars['ID']): Post[];
}