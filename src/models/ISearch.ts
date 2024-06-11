import { ICity } from "./ICity";
import { IGuide } from "./IGuide";
import { IUser } from "./IUser";

export interface ISearch {
    guides: IUser[];
    cities: ICity[];
}