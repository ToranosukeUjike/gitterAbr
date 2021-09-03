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
    get text(): string;
    set text(input: string);
    get title(): string;
    set title(input: string);
    get isPrivate(): boolean;
    set isPrivate(change: boolean);
    get isIssue(): boolean;
    set isIssue(change: boolean);
    get isTweet(): boolean;
    set isTweet(change: boolean);
    get isRoutine(): boolean;
    set isRoutine(change: boolean);
    createReply(): string;
    deletePost(): string;
    checkText(text: string): boolean;
}
