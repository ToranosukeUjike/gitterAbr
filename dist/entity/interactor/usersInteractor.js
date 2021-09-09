"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersInteractor = void 0;
class usersInteractor {
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
exports.usersInteractor = usersInteractor;
