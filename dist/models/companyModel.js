"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyModel = void 0;
const uuid_1 = __importDefault(require("uuid"));
class companyModel {
    companyMastRepository;
    company;
    constructor(companyMastRepository, company) {
        this.companyMastRepository = companyMastRepository;
        this.company = company;
    }
    static getBlanc() {
        return {
            uuid: '',
            masterID: '',
            name: '',
        };
    }
    get masterID() {
        return this.company.masterID;
    }
    set masterID(input) {
        this.company.masterID = input;
    }
    createAccount(company) {
        this.company.masterID = company.masterID;
        // エラー文変えるべき
        if (!company.name)
            return '会社名を入力してください';
        this.company.uuid = uuid_1.default.v4();
        this.company.createdAt = new Date().getTime();
        this.companyMastRepository.createCompany(this.company);
        return 'アカウント作成に成功しました';
    }
}
exports.companyModel = companyModel;
