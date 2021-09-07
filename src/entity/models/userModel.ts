import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository"


export class userModel {
    public userMastRepository: IUserMastRepository;
    public user: User;

    constructor(userMastRepository: IUserMastRepository, user: User) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }

    public static getBlanc(username: string): User {
        return {
            username: username,
            companyID: '',
            name: '',
            bio: '',
        }
    }

    public createProfile(): string {

        if (!this.user.name) return '名前を入力してください';
        
        this.user.createdAt = new Date().getTime();

        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }

    public get userName() {
        return this.user.name;
    }
    public set userName(input: string) {
        this.user.name = input;
    }
}