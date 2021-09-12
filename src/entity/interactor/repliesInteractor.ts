import { IReplyMastRepository } from "../repositoryInterface/replyMastRepository";
import { Scalars, Reply } from "../type";

export class repliesInteractor {
  private replyMastRepository: IReplyMastRepository;
  
  constructor(replyMastRepository: IReplyMastRepository) {
    this.replyMastRepository = replyMastRepository;
  }

  public async fetchReplyByRootID(rootID: Scalars['ID']): Promise<Reply[]> {
    const replies: Reply[] = await this.replyMastRepository.fetchReplyMastByRootID(rootID);
    return replies;
  }
}