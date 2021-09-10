import { Scalars, User, Company } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository"
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository"



export class userModel {
    public userMastRepository: IUserMastRepository;
    public companyMastRepository: ICompanyMastRepository;
    public user: User;

    constructor(
        userMastRepository: IUserMastRepository, 
        companyMastRepository: ICompanyMastRepository,
        user: User
    ) {
        this.userMastRepository = userMastRepository;
        this.companyMastRepository = companyMastRepository;
        this.user = user;
    }

    public static getBlanc(username: Scalars['ID']): User {
        return {
            username: username,
            companyID: [],
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
        // まず、個人情報をこうしん
        this.userMastRepository.updateUserProfile(this.user);
        // 次に会社情報を更新
        if(this.user && this.user.companyID) {
            this.user.companyID!.forEach(async companyID => {
                //　既存の会社情報を取得
                const company: Company = await this.companyMastRepository.fetchCompany(companyID || '');
                // 会社情報を更新
                company.worker.push(this.user.username);
                // 新しい会社情報データを保存する
                this.companyMastRepository.updateCompany(company);
            });
        }
            
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