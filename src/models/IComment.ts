import { IUser } from "./IUser";

export interface IComment {
    author: string;
    post: string;
    content: string;
}


export interface ICommentData {
    author: IUser;
    content: string;
    _id: string;
    post: string;
    createdAt: string;
}