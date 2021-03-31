import axios from "axios";
import { apiConfig } from "./config/apiConfigs";

export const delProduct = async (id) => {
  try {
    const response = await axios.delete(`${apiConfig}:${id}`)
    const product = response.data

    return product
  } catch (err) {
    console.log(err.response)
  }
}