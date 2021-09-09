"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivacyState = exports.Label = exports.IssueState = void 0;
var IssueState;
(function (IssueState) {
    IssueState["Open"] = "Open";
    IssueState["Closed"] = "Closed";
    IssueState["None"] = "None";
})(IssueState = exports.IssueState || (exports.IssueState = {}));
var Label;
(function (Label) {
    Label["Issue"] = "Issue";
    Label["Tweet"] = "Tweet";
    Label["Reply"] = "Reply";
    Label["Routine"] = "Routine";
})(Label = exports.Label || (exports.Label = {}));
var PrivacyState;
(function (PrivacyState) {
    PrivacyState["Public"] = "Public";
    PrivacyState["Private"] = "Private";
})(PrivacyState = exports.PrivacyState || (exports.PrivacyState = {}));
