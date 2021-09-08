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
            createdAt: new Date().getTime(),
        };
    }
    createProfile() {
        if (!this.user.name)
            return '名前を入力してください';
        this.userMastRepository.createUserProfile(this.user);
        return 'プロフィールの作成に成功しました。';
    }
    updateProfile() {
        this.userMastRepository.updateUserProfile(this.user);
        return 'プロフィールの変更に成功しました。';
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
}
exports.userModel = userModel;
