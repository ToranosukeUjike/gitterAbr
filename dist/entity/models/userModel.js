export class userModel {
    userMastRepository;
    user;
    constructor(userMastRepository, user) {
        this.userMastRepository = userMastRepository;
        this.user = user;
    }
    static getBlanc() {
        return {
            uuid: '',
            companyID: '',
            gitterID: '',
            name: ''
        };
    }
    createAccount(companyID, gitterID, name) {
        if (companyID)
            this.user.companyID = companyID;
        if (!gitterID)
            return 'IDを入力してください';
        else
            this.user.gitterID = gitterID;
        if (!name)
            return '名前を入力してください';
        else
            this.user.name = name;
        this.user.createdAt = new Date().getTime();
        this.userMastRepository.createUserAccount(this.user);
        return 'アカウント作成に成功しました';
    }
}
