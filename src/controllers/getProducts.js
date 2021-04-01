import axios from "axios";
import { urlApi } from "./config/apiConfigs";

export const getProducts = async () => {
  try {
    const response = await axios.get(urlApi);
    const { products } = response.data;
    console.log(response.data)

    return products;
  } catch (error) {
    console.error(error.response);
  }
};
