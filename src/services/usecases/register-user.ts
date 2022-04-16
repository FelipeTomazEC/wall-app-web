import { api } from "../api";

type RegisterUserResponse = {
  id: string;
}

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const endpoint = '/users';
    const result = await api.post<RegisterUserResponse>(endpoint, {
      name: username,
      email,
      password
    });

    return result.data.id;

  } catch(error) {
    console.error(error);
    return null;
  }
}