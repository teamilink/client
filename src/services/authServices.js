import iLinkAPI from "../config/api";

export const signInUser = async (data) => {
  console.log("signInUser - service triggered");
  const response = await iLinkAPI.post("/login", data);
  // response includes id, jwt, username
  return response.data;

  // return fetch("http://localhost:4000/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then((res) => res.json());
};

export const signUpUser = async (data) => {
  console.log("signInUser - service triggered");
  const response = await iLinkAPI.post("/signup", data);
  return response.data;
  // return fetch("http://localhost:4000/signup", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // }).then((res) => res.json());
};
