import { Post, Scalars } from "../type";
export interface IPostMastRepository {
    createPostMast(post: Post): Promise<Post>;
    updatePostMast(post: Post): Promise<Post>;
    deletePostMast(post: Post): Promise<Post>;
    fetchPostMast(postID: Scalars['ID']): Promise<Post>;
    fetchPostsMast(startTime: string, endTime: string): Promise<Post[]>;
}
