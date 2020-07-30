import axios from "axios";
import apiHook from "./apiHook"

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    },
    baseURL: apiHook()
  });
};