import iLinkAPI from "../config/api";

export const getLinks = async (token) => {
  console.log("getLinks -service triggered");

  const response = await iLinkAPI.get("/dashboard");
  return response.data;
  // await fetch("http://localhost:4000/dashboard", {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const data = await response.json();
  // return data;
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
  // return fetch("http://localhost:4000/links", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(link),
  // }).then((res) => res.json());
};

export const updateLink = async (link) => {
  console.log("updateLink -service triggered");
  const response = await iLinkAPI.put(`/links/${link.id}`, link);

  return response.data;

  // return fetch(`http://localhost:4000/links/${link.id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(link),
  // }).then((res) => res.json());
};

export const deleteLink = async (id) => {
  console.log("deleteLink -service triggered");
  const response = await iLinkAPI.delete(`/links/${id}`);

  return response.data;
  // return fetch(`http://localhost:4000/links/${id}`, { method: "DELETE" });
};
