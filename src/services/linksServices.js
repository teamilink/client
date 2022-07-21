export const getLinks = async (token) => {
  console.log("getLinks -service triggered");
  console.log(token);
  const response = await fetch("http://localhost:4000/dashboard", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const saveLink = (link) => {
  console.log("saveLink -service triggered");
  console.log("saveLink - service - link.id? ", link);
  return link.id ? updateLink(link) : createLink(link);
};

export const createLink = (link) => {
  console.log("createLink -service triggered");
  return fetch("http://localhost:4000/links", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(link),
  }).then((res) => res.json());
};

export const updateLink = (link) => {
  console.log("updateLink -service triggered");

  return fetch(`http://localhost:4000/links/${link.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(link),
  }).then((res) => res.json());
};

export const deleteLink = (id) => {
  console.log("deleteLink -service triggered");
  return fetch(`http://localhost:4000/links/${id}`, { method: "DELETE" });
};
