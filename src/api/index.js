import axios from "axios";

const host = import.meta.env.VITE_API_HOST || "http://109.73.206.144:6969";
const key = import.meta.env.VITE_API_KEY || "E6kUTYrYwZq2tN4QEtyzsbEBk3ie";

const api = axios.create({
  baseURL: host,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchEndpoint(endpoint, params = {}) {
  const url = `${host}/api/${endpoint}`;
  const res = await api.get(url, {
    params: { key, ...params },
  });
  return res.data;
}

export default api;
