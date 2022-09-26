import axios from "axios";

const Api = axios.create({
  baseURL: "https://users-contact-backend.herokuapp.com/",
});

export default Api;
