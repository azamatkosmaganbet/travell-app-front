import axios, { AxiosResponse } from "axios";
import $api from "../http";
import { IBlog } from "../models/IBlog";

export default class BlogService {
  static createBlog(data: FormData): Promise<AxiosResponse<IBlog>> {
    return $api.post<IBlog>(`/create/blog`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static getBlogs() {
    return $api.get(`/blogs`);
  }

  static getBlogByUser(id: string) {
    return $api.get(`/post/${id}`);
  }
}
