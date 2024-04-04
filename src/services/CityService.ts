import { AxiosResponse } from "axios";
import $api from "../http";
import { ICity, ICityData } from "../models/ICity";


export default class CityService {
  static fetchCities(): Promise<AxiosResponse<ICity[]>> {
    return $api.get<ICity[]>("/cities");
  }

  static fetchCityById(id: string): Promise<AxiosResponse<ICityData>> {
    return $api.get<ICityData>(`/cities/${id}`);
  }

  static createCity(data: any): Promise<AxiosResponse<ICity>> {
    return $api.post<ICity>(`/create/city`, data);
  }

  // static fetchUsersByRole(role: string): Promise<AxiosResponse<IUser[]>> {
  //   // Передача параметра role в запросе, если он предоставлен

  //   return $api.get<IUser[]>(`/users/${role}`);
  // }
}
