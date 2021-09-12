"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyModel = void 0;
const type_1 = require("../type");
class replyModel {
    constructor(replyMastRepository, reply) {
        this.replyMastRepository = replyMastRepository;
        this.reply = reply;
    }
    static getBlanc(companyID, username, name, rootID) {
        return {
            companyID: companyID,
            username: username,
            name: name,
            replyID: '',
            text: '',
            rootID: rootID,
            label: type_1.Label.Reply,
            replyFrom: [],
        };
    }
    createReply() {
        if (this.reply.text.length === 0)
            return '入力してください';
        this.reply.createdAt = new Date().getTime();
        this.replyMastRepository.createdReplyMast(this.reply);
        return '返信しました';
    }
    get text() {
        return this.reply.text;
    }
    set text(input) {
        this.reply.text = input;
    }
    get replyFrom() {
        return this.reply.replyFrom;
    }
    set replyFrom(input) {
        this.reply.replyFrom = input;
    }
    set targetReplyFrom(input) {
        this.reply.replyFrom.push(input);
    }
}
exports.replyModel = replyModel;
