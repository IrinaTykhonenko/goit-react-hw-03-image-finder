import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

axios.defaults.params = {
  key: "22478726-9d71c13c5b1f02bc1f95a54c0",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};
export const fetchImages = async (searchName) => {
  const response = await axios.get(`?q=${searchName}&page=1`);

  return response.data.hits;
};
