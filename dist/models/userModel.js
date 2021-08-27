"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const uuid_1 = __importDefault(require("uuid"));
class userModel {
    userMastRepository;
    user;
    constructor(userMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }
    static getBlanc() {
        return {
            uuid: '',
            companyID: '',
            gitterID: '',
            name: '',
        };
    }
    createAccount(companyID, gitterID, name) {
        if (companyID)
            this.user.companyID = companyID;
        if (!gitterID)
            return 'IDを入力してください';
        else
            this.user.gitterID = gitterID;
        if (!name)
            return '名前を入力してください';
        else
            this.user.name = name;
        this.user.uuid = uuid_1.default.v4();
        this.user.createdAt = new Date().getTime();
        this.userMastRepository.createUserAccount(this.user);
        return 'アカウント作成に成功しました';
    }
}
exports.userModel = userModel;
