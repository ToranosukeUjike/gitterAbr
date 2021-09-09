import { IUserMastRepository } from "../repositoryInterface/userMastRepository";
import { Scalars, User } from "../type";

export class postsInteractor {
  private userMastRepository: IUserMastRepository;
  
  constructor(userMastRepository: IUserMastRepository) {
    this.userMastRepository = userMastRepository;
  }

  public fetchUsersByCompanyID(companyID: Scalars['ID']): Promise<User[]> {
    const users = this.userMastRepository.fetchUsersProfileMastByCompanyID(companyID);
    return users;
  }
  public fetchUserByUsername(username: Scalars['ID']): Promise<User> {
    const user = this.userMastRepository.fetchUserProfileMastByUsername(username);
    return user;
  }
  public fetchUserByPostID(postID: Scalars['ID']): Promise<User> {
    const user = this.userMastRepository.fetchUserProfileMastByPostID(postID);
    return user;
  }
}