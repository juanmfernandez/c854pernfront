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
export const postRequestData = async (userData: {}, endpoint: string) => {
  try {
    const { data } = await axios.post(URL + endpoint, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error?.response?.data.error)
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async (endpoint: string) => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};


export const putRequest = async (endpoint: string,dataProduct:{}) => {
  try {
    const { data } = await axios.put(URL + endpoint,dataProduct,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};