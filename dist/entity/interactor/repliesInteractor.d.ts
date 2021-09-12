import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Reply, Post } from "../type";
export declare class repliesInteractor {
    private replyMastRepository;
    constructor(replyMastRepository: IReplyMastRepository);
    fetchReplyByRootID(post: Post): Promise<Reply[]>;
}
