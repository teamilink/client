export const getLinks = async (user) => {
  console.log("getLinks -service triggered");
  console.log(user);
  const response = await fetch("http://localhost:4000/dashboard", {
    method: "GET",
    headers: { Authorization: `Bearer ${user.jwt}` },
  });
  const data = await response.json();
  return data;
};

export const saveLink = (link) => {
  console.log("saveLink -service triggered");
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
