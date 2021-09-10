import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
import { Scalars, Company } from "../type";
export declare class companiesInteractor {
    private companyMastRepository;
    constructor(companyMastRepository: ICompanyMastRepository);
    fetchCompany(companyID: Scalars['String']): Promise<Company>;
    fetchAllCompany(): Promise<Company[]>;
    fetchCompaniesByUsername(username: Scalars['ID']): Promise<Company[]>;
}
