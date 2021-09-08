import { Scalars, Company } from '../type';
import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
export declare class companyModel {
    companyMastRepository: ICompanyMastRepository;
    company: Company;
    constructor(companyMastRepository: ICompanyMastRepository, company: Company);
    static getBlanc(username: Scalars['ID']): Company;
    get masterID(): Scalars['ID'];
    set masterID(input: Scalars['ID']);
    get companyID(): Scalars['ID'];
    set companyID(input: Scalars['ID']);
    get name(): string;
    set name(input: string);
    createAccount(): string;
}
