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
    updateProfile(user) {
        this.userMastRepository.updateUserProfile(user);
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
    fetchMyAccountUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userMast = yield this.userMastRepository.fetchUserProfile(username);
            return userMast;
        });
    }
}
exports.userModel = userModel;
