import { IGuide } from "./IGuide";
import { IUser } from "./IUser";

export interface IReview {
  _id:string
  rating: number;
  comment: string;
  user: IGuide;
  reviewer: IUser;
  createdAt: Date;
}

export interface IReviewData {
  reviews: IReview[];
  avg: number;
}
