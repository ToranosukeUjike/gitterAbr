"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor(userMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }
    static getBlanc(userID) {
        return {
            userID: userID,
            companyID: '',
            userName: '',
        };
    }
    createProfile() {
        if (!this.user.userName)
            return '名前を入力してください';
        this.user.createdAt = new Date().getTime();
        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }
    get userName() {
        return this.user.userName;
    }
    set userName(input) {
        this.user.userName = input;
    }
}
exports.userModel = userModel;
