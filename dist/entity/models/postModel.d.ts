import { Post, Scalars } from "../type";
import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
export declare class postModel {
    postMastRepository: IPostMastRepository;
    post: Post;
    constructor(postMastRepository: IPostMastRepository, post: Post);
    static getBlanc(companyID: Scalars['ID'], userID: Scalars['ID']): Post;
    createPost(): string;
    updatePost(postID: Scalars['ID']): boolean;
    get getPostID(): Scalars['ID'];
    set getText(text: string);
    createReply(): string;
    deletePost(): string;
    checkText(text: string): boolean;
}
