import { IGuide } from "./IGuide";

export interface ICity {
  _id: string;
  name: string;
  image: string;
}

export interface ICityData {
  city: ICity;
  guides: IGuide[]
}