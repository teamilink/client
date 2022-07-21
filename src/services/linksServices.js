import iLinkAPI from "../config/api";

export const getLinks = async (token) => {
  console.log("getLinks -service triggered");

  const response = await iLinkAPI.get("/dashboard");
  return response.data;
};

export const saveLink = (link) => {
  console.log("saveLink -service triggered");
  console.log("saveLink - service - link.id? ", link);
  return link.id ? updateLink(link) : createLink(link);
};

export const createLink = async (link) => {
  console.log("createLink -service triggered");
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
