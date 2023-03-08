/* eslint-disable */
import axios from "axios";

const token = localStorage.getItem("token");
// const api = "http://3.105.94.206:3000/admin/api";

// http://3.105.94.206:3000/
const api = "http://localhost:5000/api";

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosIntance.interceptors.request.use((req) => {
  const getToken = localStorage.getItem("token");

  if (getToken) {
    req.headers.Authorization = getToken;
  }
  return req;
});

axiosIntance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (error: any) => {
    console.log("error::::", error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
    }
    if ((status && status === 401) || (status && status === 403)) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosIntance;
