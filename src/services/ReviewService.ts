import { AxiosResponse } from "axios";
import $api from "../http";
import { IBooking } from "../models/IBooking";
import { IReview, IReviewData } from "../models/IReview";

export default class BookingService {
  static createReview(data: IReview): Promise<AxiosResponse<IReview>> {
    return $api.post<IReview>(`/create/review`, data);
  }

  static fetchReviewById(id: string): Promise<AxiosResponse<IReviewData>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<IReviewData>(`/review/${id}`);
  }

//   static getBooking (id: string) {
//     return $api.get(`/booking/${id}`)
//   }
}
