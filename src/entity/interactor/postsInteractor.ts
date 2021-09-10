import { IPostMastRepository } from "../repositoryInterface/postMastRepository";
import { Scalars, Post } from "../type";

export class postsInteractor {
  private postMastRepository: IPostMastRepository;
  
  constructor(postMastRepository: IPostMastRepository) {
    this.postMastRepository = postMastRepository;
  }

  public async fetchPostsByCompanyID(companyID: Scalars['ID']): Promise<Post[]> {
    const posts: Post[] = await this.postMastRepository.fetchPostMastByCompanyID(companyID);
    return posts;
  }
  public async fetchPostsByUsername(username: Scalars['ID']): Promise<Post[]> {
    const posts: Post[] = await this.postMastRepository.fetchPostsMastByUsername(username);
    return posts;
  }
}