import axios from "axios";

const Axios = axios.create({
  baseURL: `http://www.mocky.io/v2/581335f71000004204abaf83`,

  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;