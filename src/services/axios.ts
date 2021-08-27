import axios from "axios";

export function getAPIClient() {
  const api = axios.create({
    baseURL: 'http://localhost:3333'
  })

  api.interceptors.request.use(config => {
    return config;
  })

  return api;
}