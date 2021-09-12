import { Reply, Scalars } from "../type";
import { IReplyMastRepository } from '../repositoryInterface/replyMastRepository';
export declare class replyModel {
    replyMastRepository: IReplyMastRepository;
    reply: Reply;
    constructor(replyMastRepository: IReplyMastRepository, reply: Reply);
    static getBlanc(companyID: Scalars['ID'], username: Scalars['ID'], name: string, rootID: Scalars['ID']): Reply;
    createReply(): string;
    get text(): string;
    set text(input: string);
    get replyFrom(): Scalars['ID'][];
    set replyFrom(input: Scalars['ID'][]);
    set targetReplyFrom(input: Scalars['ID']);
}
