import axios from "axios";
import { urlApi } from "./config/apiConfigs";

export const postProducts = async (body) => {
  try {
    const response = await axios.post(urlApi, body);

    console.log(response.data);
  } catch (error) {
    console.error(error.response);
  }
};
