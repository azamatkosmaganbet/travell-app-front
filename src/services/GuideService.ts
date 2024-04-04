import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";
import { IGuide } from "../models/IGuide";

export default class GuideService {
  static fetchGuides(): Promise<AxiosResponse<IGuide[]>> {
    return $api.get<IGuide[]>("/guides");
  }

  static fetchGuideById(id: string): Promise<AxiosResponse<IGuide>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<IGuide>(`/guide/${id}`);
  }

  
}
