import { AxiosResponse } from "axios";
import $api from "../http";
import { ITrip } from "../models/ITrip";

export default class TripService {
  static fetchTripsByGuideId(id: string): Promise<AxiosResponse<ITrip[]>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<ITrip[]>(`/guide/trip/${id}`);
  }

  static fetchTripById(id: string): Promise<AxiosResponse<ITrip>> {
    return $api.get<ITrip>(`/trip/${id}`);
  }

  static updateTripById(id: string, data: Partial<ITrip>): Promise<AxiosResponse<ITrip>> {
    return $api.put<ITrip>(`/update/trip/${id}`, data);
  }
}
