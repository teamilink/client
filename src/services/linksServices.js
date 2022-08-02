import iLinkAPI from "../config/api";

export const getData = async (data) => {
  // if data is token, it triggers getDashboard
  // else if data is username, it triggers getAniLink
  const token = sessionStorage.getItem("token");
  console.log("getData - service - data ? ", data);
  console.log("getData - service - token ? ", token);
  return data === token ? getDashbaord(data) : getAniLink(data);
};

export const getDashbaord = async (token) => {
  console.log("getDashbaord -service triggered");
  const response = await iLinkAPI.get("/dashboard");
  return response.data;
};

export const getAniLink = async (username) => {
  console.log("getAniLink - service triggered");
  const response = await iLinkAPI.get(`/dashboard?username=${username}`);
  return response.data;
};

export const saveLink = (link) => {
  console.log("saveLink -service triggered");
  console.log("saveLink - service - link.id? ", link);
  return link.id ? updateLink(link) : createLink(link);
};

export const createLink = async (link) => {
  console.log("createLink -service triggered");
  console.log(link);
  const response = await iLinkAPI.post("/links", link);
  return response.data;
};

export const updateLink = async (link) => {
  console.log("updateLink -service triggered");
  const response = await iLinkAPI.put(`/links/${link.id}`, link);
  return response.data;
};

export const deleteLink = async (id) => {
  console.log("deleteLink -service triggered");
  const response = await iLinkAPI.delete(`/links/${id}`);
  return response.data;
};
