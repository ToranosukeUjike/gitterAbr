"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsInteractor = void 0;
class postsInteractor {
    constructor(postMastRepository) {
        this.postMastRepository = postMastRepository;
    }
    fetchPostsByCompanyID(companyID) {
        const posts = this.postMastRepository.fetchPostMastByCompanyID(companyID);
        return posts;
    }
    fetchPostsByUsername(username) {
        const posts = this.postMastRepository.fetchPostsMastByUsername(username);
        return posts;
    }
}
exports.postsInteractor = postsInteractor;
