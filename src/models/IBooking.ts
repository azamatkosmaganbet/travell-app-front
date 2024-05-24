import { ITrip } from "./ITrip";
import { IUser } from "./IUser";

export interface IBooking {
  adults?: number;
  children?: number
  date: string;
  city: string;
  name: string;
  phoneNumber: string;
  tourId: string;
  userId: string;
  guideId: string;
  start?: Date
}


export interface IBookingPost {
  adults?: number;
  children?: number
  date: string;
  city: string;
  name: string;
  phoneNumber: string;
  tour: ITrip;
  user: IUser;
  guide: string;
  start?: Date
}

