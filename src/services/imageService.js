import axios from "axios";

const API_KEY = process.env.REACT_APP_IMG_API_KEY;

// use unsplash api
export const getRandomImage = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}`
  );
  return response.data.urls.thumb;
};

export const imageUploader = async (file) => {
  const baseUrl = process.env.REACT_APP_IMG_UPLOAD_URL;
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "default_preset");

  // const response = await axios.post(baseUrl, data);
  const response = await fetch(baseUrl, {
    method: "POST",
    body: data,
  });

  return await response.json();
};
