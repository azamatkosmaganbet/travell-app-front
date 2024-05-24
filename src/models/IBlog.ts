import { IUser } from "./IUser";

export interface IBlog {
    _id: string;
    date: Date;
    author: IUser;
    content: string;
    title: string;
    images: string[];
}