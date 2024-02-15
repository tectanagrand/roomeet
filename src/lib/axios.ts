import axios from "axios";
export default axios.create({
  baseURL: process.env.APPURL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: process.env.APPURL,
  headers: { "Content-Type": "application/json" },
});
