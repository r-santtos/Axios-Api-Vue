import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "https://raw.githubusercontent.com/r-santtos/Axios-Api-Vue/main/src/services/"
});

export default api;