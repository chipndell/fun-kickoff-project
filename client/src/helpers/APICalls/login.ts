import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const login = async (email: string, password: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  };

  return await fetch(`/auth/login`, fetchOptions)
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
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default login;
