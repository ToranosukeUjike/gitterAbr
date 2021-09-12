import { Reply, Scalars } from "../type"

export interface IReplyMastRepository {
  // dReply CRUD
  createdReplyMast(reply: Reply): Promise<Reply>;
  updatedReplyMast(reply: Reply): Promise<Reply>;
  deletedReplyMast(reply: Reply): Promise<Reply>;

  // dReply読み込み
  fetchReplyMastByRootID(rootID: Scalars['ID']): Promise<Reply[]>;
}