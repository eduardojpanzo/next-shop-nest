import axios from "axios";

export const apiuser = axios.create({
  baseURL: "http://localhost:3003",
});
