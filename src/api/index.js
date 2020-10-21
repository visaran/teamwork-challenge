import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getUsers: async (page, search) =>
    apiClient.get(`/people/?page=${page}&search=${search}`),
  getPlanetByUrl: url => axios.get(url)
};
