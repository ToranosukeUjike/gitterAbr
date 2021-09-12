"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = void 0;
const type_1 = require("../type");
// import uuid from 'uuid';
// オブジェクトの振る舞いを定義する
// オブジェクトの振る舞いとは具体的にいうと、
// ポストの新規作成(getBlancとadd)、
// 更新(更新)、
// 140文字以内の制限を返す、
// 内容を聞かれたら内容を返す、等々
// 会社毎のpost内容の配列を返したい。
// 会社に紐づいているユーザーの取得。
// My Accountページの細分化
class postModel {
    constructor(postMastRepository, post) {
        this.postMastRepository = postMastRepository;
        this.post = post;
    }
    // username => username, userName => name;
    static getBlanc(companyID, username, name) {
        return {
            companyID: companyID,
            username: username,
            name: name,
            postID: '',
            title: '',
            text: '',
            label: undefined,
            assign: '',
            replyFrom: [],
            issueState: type_1.IssueState.Open,
            privacyState: type_1.PrivacyState.Public
        };
    }
    createPost() {
        if (!this.post.label) {
            return 'ラベルを選択してください';
        }
        if (!this.checkText(this.post.text))
            return '入力してください';
        // this.post.postID = uuid.v4();
        this.post.createdAt = new Date().getTime();
        this.postMastRepository.createPostMast(this.post);
        return '投稿しました';
    }
    get replyFrom() {
        const n = '値が無いです';
        return this.post.replyFrom || n;
    }
    set replyFrom(input) {
        this.post.replyFrom = input;
    }
    get text() {
        return this.post.text;
    }
    set text(input) {
        this.post.text = input;
    }
    get title() {
        return this.post.title || '';
    }
    set title(input) {
        this.post.title = input;
    }
    get isPrivate() {
        return this.post.privacyState === type_1.PrivacyState.Private;
    }
    set isPrivate(change) {
        if (change) {
            this.post.privacyState = type_1.PrivacyState.Private;
        }
        else {
            this.post.privacyState = type_1.PrivacyState.Public;
        }
    }
    get isIssue() {
        return this.post.label === type_1.Label.Issue;
    }
    set isIssue(change) {
        if (change)
            this.post.label = type_1.Label.Issue;
    }
    get isTweet() {
        return this.post.label === type_1.Label.Tweet;
    }
    set isTweet(change) {
        if (change)
            this.post.label = type_1.Label.Tweet;
    }
    get isRoutine() {
        return this.post.label === type_1.Label.Routine;
    }
    set isRoutine(change) {
        if (change)
            this.post.label = type_1.Label.Routine;
    }
    checkText(text) {
        if (text.length === 0)
            return false;
        if (text.length > 201)
            return false;
        return true;
    }
}
exports.postModel = postModel;
