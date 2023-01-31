import axios from "axios";

const BASE_URL = "https://api.github.com/repos/facebook/react/issues";

export const fetchFromAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
