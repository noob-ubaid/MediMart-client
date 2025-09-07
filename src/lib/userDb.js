import axios from "axios";

export const userDB = async (user) => {
  const { data } = axios.post(`${import.meta.env.VITE_API_URL}/users`, user);
};
