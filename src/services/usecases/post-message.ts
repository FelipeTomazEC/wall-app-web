import { AxiosError, AxiosRequestConfig } from "axios";
import { api } from "../api";

type PostMessageResponse = {
  id: string;
}

export const postMessage = async (
  message: string,
  onSuccess: () => void,
  onError: (message: string) => void
) => {
  try {
    const endpoint = '/messages';
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
    };
    const body = { message };
    await api.post<PostMessageResponse>(endpoint, body, config);
    onSuccess();
  } catch (err) {
    const { error } = (err as AxiosError).response?.data;
    onError(error.message);
  }
}