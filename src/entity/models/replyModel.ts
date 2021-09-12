import { Label, Reply, Scalars } from "../type"
import { IReplyMastRepository } from '../repositoryInterface/replyMastRepository';

export class replyModel {
  public replyMastRepository: IReplyMastRepository;
  public reply: Reply;

  constructor(replyMastRepository: IReplyMastRepository, reply: Reply) {
    this.replyMastRepository = replyMastRepository;
    this.reply = reply;
  }

  public static getBlanc(
    companyID: Scalars['ID'],
    username: Scalars['ID'],
    name: string,
    rootID: Scalars['ID'],
  ): Reply {
    return {
      companyID: companyID,
      username: username,
      name: name,
      replyID: '',
      text: '',
      rootID: rootID,
      label: Label.Reply,
      replyFrom: [],
    }
  }

  public createReply(): string {
    if(this.reply.text.length === 0) return '入力してください';

    this.reply.createdAt = new Date().getTime();

    // 削除予定********************
    this.reply.replyID = 'testaaa'
    // 削除予定********************

    this.replyMastRepository.createdReplyMast(this.reply);
    return '返信しました'
  }

  public get text(): string {
    return this.reply.text;
  }
  public set text(input: string) {
    this.reply.text = input;
  }

  public get replyFrom(): Scalars['ID'][] {
    return this.reply.replyFrom;
  }
  public set replyFrom(input: Scalars['ID'][]) {
    this.reply.replyFrom = input;
  }
  
  public set targetReplyFrom(input: Scalars['ID']) {
    this.reply.replyFrom.push(input);
  }
  
}