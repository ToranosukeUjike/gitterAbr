"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor(userMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }
    static getBlanc() {
        return {
            userID: '',
            companyID: '',
            username: ''
        };
    }
    createProfile(companyID, username) {
        if (companyID)
            this.user.companyID = companyID;
        if (!username)
            return '名前を入力してください';
        else
            this.user.username = username;
        this.user.createdAt = new Date().getTime();
        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }
}
exports.userModel = userModel;
