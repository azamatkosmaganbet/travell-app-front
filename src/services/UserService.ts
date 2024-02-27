import { AxiosResponse } from "axios";
import $api from "../http";
import { IUser } from "../models/IUser";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }

  static fetchUsersByRole(role: string): Promise<AxiosResponse<IUser[]>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<IUser[]>(`/users/${role}`);
  }
}
