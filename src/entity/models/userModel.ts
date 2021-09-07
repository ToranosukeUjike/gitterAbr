import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository"


export class userModel {
    public userMastRepository: IUserMastRepository;
    public user: User;

    constructor(userMastRepository: IUserMastRepository, user: User) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }

    public static getBlanc(userID: string): User {
        return {
            userID: userID,
            companyID: '',
            username: '',
        }
    }

    public createProfile(
        companyID: Scalars['ID'], 
        username: string
    ): string {
        if (companyID) this.user.companyID = companyID;

        if (!username) return '名前を入力してください';
        else this.user.username = username;
        
        this.user.createdAt = new Date().getTime();

        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }
}