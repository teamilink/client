import axios from "axios";

const API_KEY = process.env.REACT_APP_IMG_API_KEY;

// use unsplash api
export const getRandomImage = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}`
  );
  return response.data.urls.thumb;
};
