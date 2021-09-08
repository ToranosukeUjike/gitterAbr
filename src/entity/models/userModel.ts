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
            createdAt: new Date().getTime(),
        }
    }

    public createProfile(): string {
        if (!this.user.name) return '名前を入力してください';

        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }

    public updateProfile(): string {
        this.userMastRepository.updateUserProfile(this.user);
        return 'プロフィールの変更に成功しました。';
    }

    public get username(): string {
        return this.user.username;
    }
    public set username(input: string) {
        this.user.username = input;
    }

    public get name(): string {
        return this.user.name;
    }
    public set name(input: string) {
        this.user.name = input;
    }

    public get bio(): string {
        return this.user.bio || "";
    }
    public set bio(input: string) {
        this.user.bio = input;
    }
}