"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
class userModel {
    constructor(userMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }
    static getBlanc(username) {
        return {
            username: username,
            companyID: '',
            name: '',
            bio: '',
        };
    }
    createProfile() {
        if (!this.user.name)
            return '名前を入力してください';
        this.user.createdAt = new Date().getTime();
        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
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
}
exports.userModel = userModel;
