import axios from "axios";
import { urlApi } from "./config/apiConfigs";

export const delProduct = async (id) => {
  try {
    const response = await axios.delete(`${urlApi}/${id}`)
    
  } catch (err) {
    console.log(err.response)
  }
}