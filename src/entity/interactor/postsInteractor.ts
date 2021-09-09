import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
import { Scalars, Post } from "../type";

export class postsInteractor {
  private postMastRepository: IPostMastRepository;
  
  constructor(postMastRepository: IPostMastRepository) {
    this.postMastRepository = postMastRepository;
  }

  public fetchPostsByCompanyID(companyID: Scalars['ID']): Promise<Post[]> {
    const posts = this.postMastRepository.fetchPostMastByCompanyID(companyID);
    return posts;
  }
  public fetchPostsByUsername(username: Scalars['ID']): Promise<Post[]> {
    const posts = this.postMastRepository.fetchPostsMastByUsername(username);
    return posts;
  }
}