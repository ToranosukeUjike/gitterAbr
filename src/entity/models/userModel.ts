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
            userName: '',
        }
    }

    public createProfile(): string {

        if (!this.user.userName) return '名前を入力してください';
        
        this.user.createdAt = new Date().getTime();

        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }

    public get userName() {
        return this.user.userName;
    }
    public set userName(input: string) {
        this.user.userName = input;
    }
}