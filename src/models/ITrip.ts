import { IRoute } from "./IRoute";
import { IUser } from "./IUser";

export interface ITrip {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  day: number;
  guide: IUser;
  routes: IRoute[];
}
