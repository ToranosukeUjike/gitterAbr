import { Post, Label, Scalars, IssueState, PrivacyState } from "../type"
import { IPostMastRepository } from "../repositoryInterface/postMastRepository"
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

export class postModel {
    public postMastRepository: IPostMastRepository;
    public post: Post;

    constructor(postMastRepository: IPostMastRepository, post: Post) {
        this.postMastRepository = postMastRepository;
        this.post = post;
    }

    // username => username, userName => name;
    public static getBlanc(
        companyID: Scalars['ID'],
        username: Scalars['ID'],
        name: string,
    ): Post {
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
            replyID: '',
            rootID: '',
            issueState: IssueState.Open,
            privacyState: PrivacyState.Public
        }
    }

    public createPost(): string {
        if (!this.post.label) {
            return 'ラベルを選択してください';
        }

        if (!this.checkText(this.post.text)) return '入力してください';

        // this.post.postID = uuid.v4();
        this.post.createdAt = new Date().getTime();

        this.postMastRepository.createPostMast(this.post);

        return '投稿しました';
    }

    public set initializedPost(post: Post) {
        this.post = post;
    }

    public get text(): string{
       return this.post.text;
    }
    public set text(input: string) {
        this.post.text = input;
    }

    public get title(): string {
        return this.post.title || '';
    }
    public set title(input: string) {
        this.post.title = input;
    }

    public get isPrivate(): boolean {
        return this.post.privacyState === PrivacyState.Private;
    }
    public set isPrivate(change: boolean) {
        if (change) {
            this.post.privacyState = PrivacyState.Private;
        } else {
            this.post.privacyState = PrivacyState.Public;
        }
    }

    public get isIssue() {
        return this.post.label === Label.Issue;
    }
    public set isIssue(change: boolean) {
        if(change) this.post.label = Label.Issue;
    }

    public get isTweet() {
        return this.post.label === Label.Tweet;
    }
    public set isTweet(change: boolean) {
        if(change) this.post.label = Label.Tweet;
    }

    public get isRoutine() {
        return this.post.label === Label.Routine;
    }
    public set isRoutine(change: boolean) {
        if(change) this.post.label = Label.Routine;
    }

    public checkText(text: string): boolean {
        if (text.length === 0) return false;

        if (text.length > 201) return false;

        return true;
    }

}