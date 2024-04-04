import { ICity } from "./ICity";
import { IUser } from "./IUser";

export interface IGuide {
  id: string;
  _id: string;
  userId: IUser;
  description: string;
  cities: ICity[];
  languages: string[];
  interests: string[];
  status: string;
}

export interface IGuideRequest {
  languages: string[];
}