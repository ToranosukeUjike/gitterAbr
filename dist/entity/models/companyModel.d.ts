import { Scalars, Company } from '../type';
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
export declare class companyModel {
    companyMastRepository: ICompanyMastRepository;
    company: Company;
    constructor(companyMastRepository: ICompanyMastRepository, company: Company);
    static getBlanc(): Company;
    get masterID(): Scalars['ID'];
    set masterID(input: Scalars['ID']);
    createAccount(company: Company): string;
}
