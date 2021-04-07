import axios from "axios";
import { urlApi } from "./config/apiConfigs";

export const delProduct = async (id) => {
  try {
    const response = await axios.delete(`${urlApi}/${id}`)
    return response.status
  } catch (err) {
    console.log(err.response)
  }
}