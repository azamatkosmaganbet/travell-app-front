import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { toast } from "react-toastify";
import { API_URL } from "../constants/api";
import UserService from "../services/UserService";
import GuideService from "../services/GuideService";
import { IGuide } from "../models/IGuide";
import { ITrip } from "../models/ITrip";
import TripService from "../services/TripService";

export default class Store {
  user = {} as IUser;
  guides = [] as IGuide[];
  guide = {} as IGuide;
  trips = [] as ITrip[];
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setTrips(trips: ITrip[]) {
    this.trips = trips;
  }

  setGuide(guide: IGuide) {
    this.guide = guide;
  }

  setGuides(guide: IGuide[]) {
    this.guides = guide;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string, navigate: any) {
    this.setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);

      toast.success("Вы успешно вошли в аккаунт");
      navigate("/");

      this.setLoading(true);
    } catch (e: any) {
      toast.error(e.response?.data?.message);
      this.setLoading(false);
    }
  }

  async registration(
    email: string,
    password: string,
    name: string,
    surname: string,
    phone: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        name,
        surname,
        phone
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response);

      this.setAuth(true);
      this.setUser(response.data.user);

      toast.success("Вы успешно зарегистрировались!");
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      this.setLoading(true);
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", response.data.accessToken);
      console.log(response);
      console.log(this.isLoading);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async changeAvatar(id: string, avatarFile: File) {
    try {
      const formData = new FormData();
      formData.append("file", avatarFile);
      const response = await axios.put(`${API_URL}/update/${id}`, formData, {
        withCredentials: true, // если вам нужны куки при запросе
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Вы успешно изменили аватар !");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  }

  // async getUsersByRole(role: string) {
  //   try {
  //     this.setLoading(true);
  //     const response = await UserService.fetchUsersByRole(role);

  //     this.setGuides(response.data);
  //   } catch (e: any) {
  //     toast.error("Ошибка при получении пользователей");
  //   } finally {
  //     this.setLoading(false);
  //   }
  // }

  async getGuideById(id: string) {
    try {
      this.setLoading(true);
      const response = await GuideService.fetchGuideById(id);

      this.setGuide(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Гида");
    } finally {
      this.setLoading(false);
    }
  }

  async getGuides() {
    try {
      this.setLoading(true);
      const response = await GuideService.fetchGuides();

      this.setGuides(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Гида");
    } finally {
      this.setLoading(false);
    }
  }

  async getTripsByGuideId(guideId: string) {
    try {
      this.setLoading(true);
      const response = await TripService.fetchTripsByGuideId(guideId)

      this.setTrips(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Трипа");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }
}
