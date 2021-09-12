import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Scalars, Reply } from "../type";
export declare class repliesInteractor {
    private replyMastRepository;
    constructor(replyMastRepository: IReplyMastRepository);
    fetchReplyByRootID(rootID: Scalars['ID']): Promise<Reply[]>;
}
