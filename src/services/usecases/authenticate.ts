import { api } from "../api"

type AuthenticationResponse = {
  token: string;
}

export const authenticate = async (email: string, password: string) => {
  const endpoint = '/token'

  try {
    const result = await api.post<AuthenticationResponse>(endpoint, {
      email,
      password
    });

    return {
      token: result.data.token
    };

  } catch(err) {
    console.error(err);
    return null;
  }
}