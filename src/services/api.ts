import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/thiago-castilho/plantmanager",
});

export default api;
