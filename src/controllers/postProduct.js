import axios from "axios";
import { urlApi } from "./config/apiConfigs";

export const postProducts = async (body) => {
  try {
    const response = await axios.post(urlApi, body);

    return response.status
  } catch (error) {
    return error.response.data.message
  }
};
