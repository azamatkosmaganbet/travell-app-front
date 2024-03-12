import { IUser } from "./IUser";

export interface IGuide {
  id: string;
  userId: IUser;
  description: string;
  cities: string[];
  languages: string[];
  interests: string[];
}
