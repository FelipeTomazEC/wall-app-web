import { AxiosError } from "axios";
import { api } from "../api"

type AuthenticationResponse = {
  token: string;
  expiredInSeconds: number;
}

type Request = {
  email: string;
  password: string;
}

export const authenticate = async (
  request: Request, 
  onSuccess: (token: string, expiresInSeconds: number) => void,
  onError: (message: string) => void
  ) => {
  const endpoint = '/token'

  try {
    const result = await api.post<AuthenticationResponse>(endpoint, request);
    onSuccess(result.data.token, result.data.expiredInSeconds);
  } catch(err) {
    const { error } = (err as AxiosError).response?.data;
    onError(error.message);
  }
}