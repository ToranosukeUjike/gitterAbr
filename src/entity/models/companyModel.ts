import { Scalars, Company } from '../type';
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
// import uuid from 'uuid';

export class companyModel {
    public companyMastRepository: ICompanyMastRepository;
    public company: Company;

    constructor(companyMastRepository: ICompanyMastRepository, company: Company) {
        this.companyMastRepository = companyMastRepository;
        this.company = company;
    }

    public static getBlanc(username: Scalars['ID']): Company {
        return {
            companyID: '',
            masterID: username,
            name: '',
        }
    }

    public get masterID(): Scalars['ID'] {
        return this.company.masterID;
    }
    public set masterID(input: Scalars['ID']) {
        this.company.masterID = input;
    }

    public get companyID(): Scalars['ID'] {
        return this.company.companyID;
    }
    public set companyID(input: Scalars['ID']) {
        this.company.companyID = input;
    }

    public get name(): string {
        return this.company.name;
    }
    public set name(input: string) {
        this.company.name = input;
    }

    public createAccount(): string {
        
        if (!this.company.name) return '会社名を入力してください';

        // this.company.uuid = uuid.v4();
        this.company.createdAt = new Date().getTime();

        this.companyMastRepository.createCompany(this.company);
        return 'アカウント作成に成功しました';
    }
}