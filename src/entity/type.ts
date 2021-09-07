export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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










export type Company = {
  __typename?: 'Company';
  uuid: Scalars['ID'];
  masterID: Scalars['ID'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['AWSTimestamp']>;
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export enum IssueState {
  Open = 'Open',
  Closed = 'Closed'
}

export enum Label {
  Issue = 'Issue',
  Tweet = 'Tweet',
  Reply = 'Reply',
  Routine = 'Routine'
}

export type Post = {
  __typename?: 'Post';
  companyID: Scalars['ID'];
  username: Scalars['ID'];
  postID: Scalars['ID'];
  name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  label?: Maybe<Label>;
  assign?: Maybe<Scalars['ID']>;
  replyID?: Maybe<Scalars['ID']>;
  issueState?: Maybe<IssueState>;
  privacyState: PrivacyState;
  createdAt?: Maybe<Scalars['AWSTimestamp']>;
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export enum PrivacyState {
  Public = 'Public',
  Private = 'Private'
}

export type User = {
  __typename?: 'User';
  username: Scalars['ID'];
  companyID?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['AWSTimestamp']>;
  deletedAt?: Maybe<Scalars['AWSTimestamp']>;
};
