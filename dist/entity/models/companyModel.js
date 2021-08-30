// import uuid from 'uuid';
export class companyModel {
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
            name: ''
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
        // this.company.uuid = uuid.v4();
        this.company.createdAt = new Date().getTime();
        this.companyMastRepository.createCompany(this.company);
        return 'アカウント作成に成功しました';
    }
}
