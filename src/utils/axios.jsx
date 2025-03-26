import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // The base URL is the URL that is common to all the requests
});

export default instance;
