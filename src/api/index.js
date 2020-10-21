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
  getUsers: async () => apiClient.get("/people/"),
  // getPlanetById: id => apiClient.get(`/planets/${id}`),
  getPlanetByUrl: url => axios.get(url)
};
