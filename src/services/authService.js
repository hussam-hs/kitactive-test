import api from '../utils/api';

export const registerUser = async (request) => {
  try {
    const response = await api.post('/register', request);
    if (response.status === 200) {
      return true;
    }
    return false;
  }
  catch (error) {
    return false;
  }
};

export const loginUser = async (request) => {
  try {
    const response = await api.post('/login', request);
    if (response.status === 200) {
      const token = response.data.token;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem("token", token);
      return token
    }
    return false;
  }
  catch {
    return false;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post('/logout');
    if (response.status === 200) {
      api.defaults.headers.common['Authorization'] = null;
      localStorage.removeItem("token");
      return true;
    }
  }
  catch {
    return false;
  }
};
