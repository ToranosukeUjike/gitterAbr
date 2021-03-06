import { Post, Scalars, User } from "../type"

export interface IPostMastRepository {
	// Post CRUD
	createPostMast(post: Post): Promise<Post>;
	updatePostMast(post: Post): Promise<Post>;
	deletePostMast(post: Post): Promise<Post>;

	// Post読み込み
	fetchPostMastByUser(user: User): Promise<Post[]>;
	fetchPostMastByCompanyID(companyID: Scalars['ID']): Promise<Post[]>;
	fetchPostsMastByUsername(username: Scalars['ID']): Promise<Post[]>;
}