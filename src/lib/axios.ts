import axios from "axios";
export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_APPURL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APPURL,
  headers: { "Content-Type": "application/json" },
});
