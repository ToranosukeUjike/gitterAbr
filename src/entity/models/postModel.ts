import { Post, Label, Scalars, IssueState, PrivacyState } from "../type"
import { IPostMastRepository } from "../repositoryInterface/postMastRepository"
// import uuid from 'uuid';

// オブジェクトの振る舞いを定義する
// オブジェクトの振る舞いとは具体的にいうと、
// ポストの新規作成(getBlancとadd)、
// 更新(更新)、
// 140文字以内の制限を返す、
// 内容を聞かれたら内容を返す、等々

export class postModel {
    public postMastRepository: IPostMastRepository;
    public post: Post;

    constructor(postMastRepository: IPostMastRepository, post: Post) {
        this.postMastRepository = postMastRepository;
        this.post = post;
    }

    public static getBlanc(
        companyID: Scalars['ID'],
        userID: Scalars['ID']
    ): Post {
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
        }
    }

    public createPost(): string {
        if (this.post.title && this.post.title.length === 0) {
            this.post.label = Label.Tweet;
        } else {
            if (!this.post.label) {
                return 'ラベルを選択してください';
            }
        }

        if (!this.checkText(this.post.text)) return '入力してください';

        // this.post.postID = uuid.v4();
        this.post.createdAt = new Date().getTime();

        this.postMastRepository.createPostMast(this.post);

        return '投稿しました';
    }

    public updatePost(postID: Scalars['ID']): boolean {
        if(postID !== this.post.postID) {
            return false;
        }
        return true;
    }

    // 投稿したPostIDの取得
    public get getPostID(): Scalars['ID'] {
        return this.post.postID;
    }

    // 変更したテキストを反映
    public set getText(text: string){
        this.post.text = text;
    }

    public createReply(): string {
        this.post.label = Label.Reply;

        if (!this.checkText(this.post.text)) return '入力してください';

        return '返信しました';
    }

    public deletePost(): string {
        // 削除予定
        this.postMastRepository.deletePostMast(this.post);
        return '削除しました';
    }

    public checkText(text: string): boolean {
        if (text.length === 0) return false;

        if (text.length > 201) return false;

        return true;
    }

}