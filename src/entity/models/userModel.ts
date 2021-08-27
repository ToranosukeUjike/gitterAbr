import { Scalars, User } from '../type';
import { IUserMastRepository } from "../repositoryInterface/userMastRepository"
import uuid from 'uuid';

export class userModel {
    public userMastRepository: IUserMastRepository;
    public user: User;

    constructor(userMastRepository: IUserMastRepository, user: User) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }

    public static getBlanc(): User {
        return {
            uuid: '',
            companyID: '',
            gitterID: '',
            name: '',
        }
    }

    public createAccount(
        companyID: Scalars['ID'], 
        gitterID: Scalars['ID'],
        name: string,
    ): string {
        if (companyID) this.user.companyID = companyID;

        if (!gitterID) return 'IDを入力してください';
        else this.user.gitterID = gitterID;

        if (!name) return '名前を入力してください';
        else this.user.name = name;

        this.user.uuid = uuid.v4();
        this.user.createdAt = new Date().getTime();

        this.userMastRepository.createUserAccount(this.user);
        return 'アカウント作成に成功しました';
    }
}