import axios from "axios";

const URL: string = import.meta.env.VITE_API_URL;

// @ts-ignore
const { token } = JSON.parse(localStorage.getItem("auth")) || "";
const Authorization = token && `Bearer ${token}`;

export const postRequest = async (userData: {}, endpoint: string) => {
  try {
    const { data } = await axios.post(URL + endpoint, userData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};
