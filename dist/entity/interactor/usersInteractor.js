"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsInteractor = void 0;
class postsInteractor {
    constructor(userMastRepository) {
        this.userMastRepository = userMastRepository;
    }
    fetchUsersByCompanyID(companyID) {
        const users = this.userMastRepository.fetchUsersProfileMastByCompanyID(companyID);
        return users;
    }
    fetchUserByUsername(username) {
        const user = this.userMastRepository.fetchUserProfileMastByUsername(username);
        return user;
    }
    fetchUserByPostID(postID) {
        const user = this.userMastRepository.fetchUserProfileMastByPostID(postID);
        return user;
    }
}
exports.postsInteractor = postsInteractor;
