import { Scalars, Company } from "../type";

export interface ICompanyMastRepository {
    createCompany(company: Company): void;
    updateCompany(company: Company): void;
    deleteCompany(company: Company): void;

    fetchCompany(name: Scalars['String']): Promise<Company>;
    fetchCompanyByUsername(username: Scalars['ID']): Promise<Company[]>;
}