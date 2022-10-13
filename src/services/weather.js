import axios from "axios";
const baseUrl = '/api/'

const getCity=async city=> {
  const req = axios.get(`${baseUrl}${city}`)
  return req.then(res => res.data)
}

export default {getCity}