import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Reply, Post } from "../type";

export class repliesInteractor {
  private replyMastRepository: IReplyMastRepository;
  
  constructor(replyMastRepository: IReplyMastRepository) {
    this.replyMastRepository = replyMastRepository;
  }

  public async fetchReplyByRootID(post: Post): Promise<Reply[]> {
    const replies: Reply[] = await this.replyMastRepository.fetchReplyMastByRootID(post);
    return replies;
  }
}