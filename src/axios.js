import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e02e4.cloudfunctions.net/api",
  // "http://localhost:5001/clone-e02e4/us-central1/api",
});

export default instance;
