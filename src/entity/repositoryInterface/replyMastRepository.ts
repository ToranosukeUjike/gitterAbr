import { Post, Reply } from "../type"

export interface IReplyMastRepository {
  // dReply CRUD
  createdReplyMast(reply: Reply): Promise<Reply>;
  updatedReplyMast(reply: Reply): Promise<Reply>;
  deletedReplyMast(reply: Reply): Promise<Reply>;

  // dReply読み込み
  fetchReplyMastByRootID(post: Post): Promise<Reply[]>;
}