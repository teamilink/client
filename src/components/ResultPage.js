import React, { useEffect, useState } from "react";
import { getLinks } from "../services/linksServices";

const ResultPage = () => {
  const currentUser = {
    username: sessionStorage.getItem("username"),
    jwt: sessionStorage.getItem("token"),
  };
  const [linkArr, setLinkArr] = useState([]);

  useEffect(() => {
    getLinks(currentUser) //
      .then((data) => {
        setLinkArr(data);
      })
      .catch((err) => console.log(err));
    console.log(linkArr);
  }, []);
  return (
    <ul>
      {linkArr.length > 0 ? (
        linkArr.map((link) => (
          <li key={link.link_id}>
            <a href={link.link_address} target="_blank" rel="noreferrer">
              <h3>{link.title}</h3>
            </a>
          </li>
        ))
      ) : (
        <h1>data unavailable</h1>
      )}
    </ul>
  );
};

export default ResultPage;
