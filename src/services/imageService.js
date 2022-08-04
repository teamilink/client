import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;

// use unsplash api
export const getRandomImage = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=TXaG_nMau4rphryLFAF6wEefIo5JucV-qEOf5Yw4Q9Y`
    // `https://api.unsplash.com/photos/?client_id=${API_KEY}`
  );
  const img = response.data[0];
  return img.urls.thumb;
  // setImage(img.urls.thumb);
  // const data = await response.data;
};
