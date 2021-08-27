import { Scalars, Company } from '../type';
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository"
// import uuid from 'uuid';

export class companyModel {
    public companyMastRepository: ICompanyMastRepository;
    public company: Company;

    constructor(companyMastRepository: ICompanyMastRepository, company: Company) {
        this.companyMastRepository = companyMastRepository;
        this.company = company;
    }

    public static getBlanc(): Company {
        return {
            uuid: '',
            masterID: '',
            name: '',
        }
    }

    public get masterID(): Scalars['ID'] {
        return this.company.masterID
    }
    public set masterID(input: Scalars['ID']) {
        this.company.masterID = input
    }
    public createAccount(company: Company): string {
        this.company.masterID = company.masterID;
        // エラー文変えるべき
        if (!company.name) return '会社名を入力してください';

        // this.company.uuid = uuid.v4();
        this.company.createdAt = new Date().getTime();

        this.companyMastRepository.createCompany(this.company);
        return 'アカウント作成に成功しました'
    }
}