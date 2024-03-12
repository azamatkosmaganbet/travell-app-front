import { AxiosResponse } from "axios";
import $api from "../http";
import { ITrip } from "../models/ITrip";

export default class TripService {
  static fetchTripsByGuideId(id: string): Promise<AxiosResponse<ITrip[]>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<ITrip[]>(`/guide/trip/${id}`);
  }
}
