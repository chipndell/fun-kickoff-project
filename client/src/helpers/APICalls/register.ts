import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const register = async (username: string, email: string, password: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
    credentials: 'include',
  };
  return await fetch(`/auth/register`, fetchOptions)
    .then((res) => res.json())
    .then((data) => ({
      success: {
        user: {
          username: data.success.user.username,
          email: data.success.email,
        },
        token: data.success.token,
        message: 'success',
      },
    }))
    .catch((err) => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default register;
