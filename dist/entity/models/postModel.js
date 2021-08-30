import { Label, IssueState, PrivacyState } from "../type";
// import uuid from 'uuid';
// オブジェクトの振る舞いを定義する
// オブジェクトの振る舞いとは具体的にいうと、
// ポストの新規作成(getBlancとadd)、
// 更新(更新)、
// 140文字以内の制限を返す、
// 内容を聞かれたら内容を返す、等々
export class postModel {
    postMastRepository;
    post;
    constructor(postMastRepository, post) {
        this.postMastRepository = postMastRepository;
        this.post = post;
    }
    static getBlanc(companyID, userID) {
        return {
            companyID: companyID,
            userID: userID,
            postID: '',
            title: '',
            text: '',
            label: undefined,
            assign: '',
            replyID: '',
            issueState: IssueState.Open,
            privacyState: PrivacyState.Public
        };
    }
    createPost() {
        if (this.post.title && this.post.title.length === 0) {
            this.post.label = Label.Tweet;
        }
        else {
            if (!this.post.label) {
                return 'ラベルを選択してください';
            }
        }
        if (!this.checkText(this.post.text))
            return '入力してください';
        // this.post.postID = uuid.v4();
        this.post.createdAt = new Date().getTime();
        this.postMastRepository.createPostMast(this.post);
        return '投稿しました';
    }
    updatePost(postID) {
        if (postID !== this.post.postID) {
            return false;
        }
        return true;
    }
    // 投稿したPostIDの取得
    get getPostID() {
        return this.post.postID;
    }
    // 変更したテキストを反映
    set getText(text) {
        this.post.text = text;
    }
    createReply() {
        this.post.label = Label.Reply;
        if (!this.checkText(this.post.text))
            return '入力してください';
        return '返信しました';
    }
    deletePost() {
        // 削除予定
        this.postMastRepository.deletePostMast(this.post);
        return '削除しました';
    }
    checkText(text) {
        if (text.length === 0)
            return false;
        if (text.length > 201)
            return false;
        return true;
    }
}
