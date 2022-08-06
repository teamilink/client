import iLinkAPI from "../config/api";

// if data is token, it triggers getDashboard
// else if data is username, it triggers getAniLink
export const getData = async (data) => {
  const token = sessionStorage.getItem("token");
  return data === token ? getDashbaord(data) : getAniLink(data);
};

export const getDashbaord = async (token) => {
  const response = await iLinkAPI.get("/dashboard");
  return response.data;
};

export const getAniLink = async (username) => {
  const response = await iLinkAPI.get(`/dashboard?username=${username}`);
  return response.data;
};

export const saveLink = (link) => {
  return link.id ? updateLink(link) : createLink(link);
};

export const createLink = async (link) => {
  const response = await iLinkAPI.post("/links", link);
  return response.data;
};

export const updateLink = async (link) => {
  console.log("updateLink - service");
  const response = await iLinkAPI.put(`/links/${link.id}`, link);
  return response.data;
};

export const deleteLink = async (id) => {
  console.log("deleteLink - service");
  const response = await iLinkAPI.delete(`/links/${id}`);
  return response.data;
};
