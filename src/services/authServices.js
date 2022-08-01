import iLinkAPI from "../config/api";

export const signInUser = async (data) => {
  console.log("signInUser - service triggered");
  const response = await iLinkAPI.post("/login", data);
  return response.data;
};

export const signUpUser = async (data) => {
  console.log("signInUser - service triggered");
  const response = await iLinkAPI.post("/signup", data);
  return response.data;
};
