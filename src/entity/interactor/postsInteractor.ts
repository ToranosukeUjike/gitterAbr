import { postModel } from "../..";
import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
import { Scalars, Post } from "../type";

export class postsInteractor {
  private postMastRepository: IPostMastRepository;
  
  constructor(postMastRepository: IPostMastRepository) {
    this.postMastRepository = postMastRepository;
  }

  public fetchPostsByCompanyID(companyID: Scalars['ID']): Post[] {
    const posts: Post[] = this.postMastRepository.fetchPostMastByCompanyID(companyID);
    return posts;
  }
  public fetchPostsByUsername(username: Scalars['ID']): Post[] {
    const posts: Post[] = this.postMastRepository.fetchPostsMastByUsername(username);
    return posts;
  }
}