import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Change to your API URL
  withCredentials: true,
});

export default axiosInstance;
