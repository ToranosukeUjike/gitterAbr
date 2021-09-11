"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor(userMastRepository, companyMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.companyMastRepository = companyMastRepository;
        this.user = user;
    }
    static getBlanc(username) {
        return {
            username: username,
            companyID: '',
            name: '',
            bio: '',
            createdAt: new Date().getTime(),
        };
    }
    setUser(user) {
        this.user = user;
    }
    createProfile() {
        if (!this.user.name)
            return '名前を入力してください';
        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }
    // public updateProfile(): string {
    //     // まず、個人情報をこうしん
    //     this.userMastRepository.updateUserProfile(this.user);
    //     // 次に会社情報を更新
    //     if(this.user && this.user.companyID) {
    //         this.user.companyID!.forEach(async companyID => {
    //             //　既存の会社情報を取得
    //             const company: Company = await this.companyMastRepository.fetchCompany(companyID || '');
    //             // 会社情報を更新
    //             company.worker.push(this.user.username);
    //             // 新しい会社情報データを保存する
    //             this.companyMastRepository.updateCompany(company);
    //         });
    //     }
    //     return 'プロフィールの変更に成功しました。';
    // }
    updateProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            // まず、個人情報をこうしん
            this.userMastRepository.updateUserProfile(this.user);
            // 次に会社情報を更新
            if (this.user && this.user.companyID) {
                //　既存の会社情報を取得
                const company = yield this.companyMastRepository.fetchCompany(this.user.companyID || '');
                // 会社情報を更新
                company.worker.push(this.user.username);
                // 新しい会社情報データを保存する
                this.companyMastRepository.updateCompany(company);
            }
            ;
            return 'プロフィールの変更に成功しました。';
        });
    }
    get username() {
        return this.user.username;
    }
    set username(input) {
        this.user.username = input;
    }
    get name() {
        return this.user.name;
    }
    set name(input) {
        this.user.name = input;
    }
    get bio() {
        return this.user.bio || "";
    }
    set bio(input) {
        this.user.bio = input;
    }
    get companyID() {
        return this.user.companyID || '';
    }
    set companyID(input) {
        this.user.companyID = input;
    }
}
exports.userModel = userModel;
