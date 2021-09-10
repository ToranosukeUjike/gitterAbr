"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companiesInteractor = void 0;
class companiesInteractor {
    constructor(companyMastRepository) {
        this.companyMastRepository = companyMastRepository;
    }
    fetchCompany(companyID) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield this.companyMastRepository.fetchCompany(companyID);
            return company;
        });
    }
    fetchAllCompany() {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield this.companyMastRepository.fetchAllCompany();
            return companies;
        });
    }
    fetchCompaniesByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const companiese = yield this.companyMastRepository.fetchCompaniesByUsername(username);
            return companiese;
        });
    }
}
exports.companiesInteractor = companiesInteractor;
