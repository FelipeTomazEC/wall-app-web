import { AxiosError } from "axios";
import { api } from "../api";

type RegisterUserResponse = {
  id: string;
}

export type RegisterUserRequest = {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (
  request: RegisterUserRequest,
  onSuccess: (id: string) => void,
  onError: (message: string) => void
) => {
  try {
    const endpoint = '/users';
    const { email, username, password } = request;
    const result = await api.post<RegisterUserResponse>(endpoint, {
      name: username,
      email,
      password
    });

    onSuccess(result.data.id);

  } catch(err) {
    const { error } = (err as AxiosError).response?.data
    onError(error.message);
  }
}