import { Post, Scalars } from "../type"

export interface IPostMastRepository {
    // Post CRUD
    createPostMast(post: Post): Promise<Post>;
    updatePostMast(post: Post): Promise<Post>;
    deletePostMast(post: Post): Promise<Post>;

    // Post読み込み
    fetchPostMast(postID: Scalars['ID']): Promise<Post>;
    fetchPostsMast(startTime: string, endTime: string): Promise<Post[]>;
}