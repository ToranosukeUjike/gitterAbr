export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    AWSDate: string;
    AWSDateTime: string;
    AWSEmail: string;
    AWSIPAddress: string;
    AWSJSON: string;
    AWSPhone: string;
    AWSTime: string;
    AWSTimestamp: number;
    AWSURL: string;
};
export declare type Company = {
    __typename?: 'Company';
    companyID: Scalars['ID'];
    masterID: Scalars['ID'];
    name: Scalars['String'];
    worker: Array<Maybe<Scalars['String']>>;
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare enum IssueState {
    Open = "Open",
    Closed = "Closed",
    None = "None"
}
export declare enum Label {
    Issue = "Issue",
    Tweet = "Tweet",
    Reply = "Reply",
    Routine = "Routine"
}
export declare type Post = {
    __typename?: 'Post';
    companyID: Scalars['ID'];
    username: Scalars['ID'];
    postID: Scalars['ID'];
    name: Scalars['String'];
    title?: Maybe<Scalars['String']>;
    text: Scalars['String'];
    label?: Maybe<Label>;
    assign?: Maybe<Scalars['ID']>;
    replyFrom: Array<Scalars['ID']>;
    issueState?: Maybe<IssueState>;
    privacyState: PrivacyState;
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare enum PrivacyState {
    Public = "Public",
    Private = "Private"
}
export declare type Reply = {
    __typename?: 'Reply';
    companyID: Scalars['ID'];
    username: Scalars['ID'];
    replyID: Scalars['ID'];
    name: Scalars['String'];
    text: Scalars['String'];
    label: Label;
    rootID: Scalars['ID'];
    replyFrom: Array<Scalars['ID']>;
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
export declare type User = {
    __typename?: 'User';
    username: Scalars['ID'];
    companyID?: Maybe<Scalars['ID']>;
    name: Scalars['String'];
    bio?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['AWSTimestamp']>;
    deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
