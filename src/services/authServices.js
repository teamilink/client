export const signInUser = (data) => {
  console.log("signInUser - service triggered");
  return fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const signUpUser = (data) => {
  console.log("signInUser - service triggered");
  return fetch("http://localhost:4000/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
