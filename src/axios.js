import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL after running cloud function
  baseURL: "",
  // "http://localhost:5001/challenge-a297f/us-central1/api", -> for local emulator
});

export default instance;
