import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Reply, Post } from "../type";
interface IPostAndReplies {
    post: Post | null;
    replies: Reply[];
}
export declare class repliesInteractor {
    private replyMastRepository;
    constructor(replyMastRepository: IReplyMastRepository);
    fetchReplyByRootID(post: Post): Promise<IPostAndReplies>;
}
export {};
