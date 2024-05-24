import { AxiosResponse } from "axios";
import $api from "../http";
import { IBooking } from "../models/IBooking";

export default class BookingService {
  static createBooking(data: IBooking): Promise<AxiosResponse<IBooking>> {
    return $api.post<IBooking>(`/create/booking`, data);
  }

  static getBooking (id: string) {
    return $api.get(`/booking/${id}`)
  }
}
