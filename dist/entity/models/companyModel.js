"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyModel = void 0;
// import uuid from 'uuid';
class companyModel {
    constructor(companyMastRepository, company) {
        this.companyMastRepository = companyMastRepository;
        this.company = company;
    }
    static getBlanc(username) {
        return {
            companyID: '',
            masterID: username,
            name: '',
        };
    }
    get masterID() {
        return this.company.masterID;
    }
    set masterID(input) {
        this.company.masterID = input;
    }
    get companyID() {
        return this.company.companyID;
    }
    set companyID(input) {
        this.company.companyID = input;
    }
    get name() {
        return this.company.name;
    }
    set name(input) {
        this.company.name = input;
    }
    createAccount() {
        if (!this.company.name)
            return '会社名を入力してください';
        // this.company.uuid = uuid.v4();
        this.company.createdAt = new Date().getTime();
        this.companyMastRepository.createCompany(this.company);
        return 'アカウント作成に成功しました';
    }
}
exports.companyModel = companyModel;
