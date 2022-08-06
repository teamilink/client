import iLinkAPI from "../config/api";

export const signInUser = async (data) => {
  const response = await iLinkAPI.post("/login", data);
  return response.data;
};

export const signUpUser = async (data) => {
  const response = await iLinkAPI.post("/signup", data);
  return response.data;
};
