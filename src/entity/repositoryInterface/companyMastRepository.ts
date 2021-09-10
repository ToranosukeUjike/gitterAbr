import { Scalars, Company } from "../type";

export interface ICompanyMastRepository {
    createCompany(company: Company): void;
    updateCompany(company: Company): void;
    deleteCompany(company: Company): void;

    fetchCompany(companyID: Scalars['String']): Promise<Company>;
    fetchAllCompany(): Promise<Company[]>;
    fetchCompaniesByUsername(username: Scalars['ID']): Promise<Company[]>;
}