import { ICompanyMastRepository } from "../repositoryInterface/companyMastRepository";
import { Scalars, Company } from "../type";

export class companiesInteractor {
  private companyMastRepository: ICompanyMastRepository;

  constructor(companyMastRepository: ICompanyMastRepository) {
    this.companyMastRepository = companyMastRepository;
  }

  public async fetchCompany(companyID: Scalars['String']): Promise<Company> {
    const company: Company = await this.companyMastRepository.fetchCompany(companyID);
    return company
  }

  public async fetchAllCompany(): Promise<Company[]> {
    const companies: Company[] = await this.companyMastRepository.fetchAllCompany();
    return companies
  }

  public async fetchCompaniesByUsername(username: Scalars['ID']): Promise<Company[]> {
    const companiese: Company[] = await this.companyMastRepository.fetchCompaniesByUsername(username);
    return companiese;
  }
}