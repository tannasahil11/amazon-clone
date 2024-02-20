import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c2959.cloudfunctions.net/api",
});
export default instance;


//local host http://127.0.0.1:5001/clone-c2959/us-central1/api