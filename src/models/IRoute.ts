import { IStop } from "./IStop";

export interface IRoute {
  _id: string;
  name: string;
  stops: IStop[];
}
