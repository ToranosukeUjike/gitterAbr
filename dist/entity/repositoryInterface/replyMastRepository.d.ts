import { Reply, Scalars } from "../type";
export interface IReplyMastRepository {
    createdReplyMast(reply: Reply): Promise<Reply>;
    updatedReplyMast(reply: Reply): Promise<Reply>;
    deletedReplyMast(reply: Reply): Promise<Reply>;
    fetchReplyMastByRootID(rootID: Scalars['ID']): Promise<Reply[]>;
}
