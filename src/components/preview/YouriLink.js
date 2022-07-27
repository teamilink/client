import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAniLink } from "../../services/linksServices";
import Card from "./Card";

const YouriLink = () => {
  const { username } = useParams();
  console.log(username);

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    getAniLink(username)
      .then((data) => {
        console.log(data);
        setApiData(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [username]);

  return (
    <section className="">
      {loading ? (
        <h1>Your iLink Page</h1>
      ) : (
        <Card links={apiData.links} appearance={apiData.appearance} />
      )}
    </section>
  );
};

export default YouriLink;
