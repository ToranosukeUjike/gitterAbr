import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Reply, Post } from "../type";

interface IPostAndReplies {
  post: Post | null,
  replies: Reply[]
}

export class repliesInteractor {
  private replyMastRepository: IReplyMastRepository;
  
  constructor(replyMastRepository: IReplyMastRepository) {
    this.replyMastRepository = replyMastRepository;
  }

  public async fetchReplyByRootID(post: Post): Promise<IPostAndReplies> {
    const postAndReplies: IPostAndReplies = await this.replyMastRepository.fetchReplyMastByRootID(post);
    return postAndReplies;
  }
}