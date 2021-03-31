import axios from "axios";
import { apiConfig } from "./config/apiConfigs";

export const getProducts = async () => {
  try {
    const response = await axios.get(apiConfig);
    const { products } = response.data;

    return products;
  } catch (error) {
    console.error(error.response);
  }
};
