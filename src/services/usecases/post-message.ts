import { AxiosRequestConfig } from "axios";
import { api } from "../api";

type PostMessageResponse = {
  id: string;
}

export const postMessage = async (message: string) => {
  try {
    const endpoint = '/messages';
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
    };
    const body = { message };
    await api.post<PostMessageResponse>(endpoint, body, config);
  } catch (error) {
    console.error(error);
  }
}