import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/linksServices";
// import Footer from "../Footer";
import { useGlobalState } from "../../utils/stateContext";
import Card from "./Card";
import { YouriLinkContainer } from "./YouriLinkStyling";

const YouriLink = () => {
  console.log("YouriLink");
  const { username } = useParams();

  const { store, dispatch } = useGlobalState();
  const { token, appearance } = store;

  // console.log("******* check state ************");
  // console.log("links", links);
  // console.log("appearance", appearance);

  const [loading, setLoading] = useState(true);
  const [visitor, setVisitor] = useState(username ? true : false);
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    console.log("useEffect - thisBgColor");
    console.log(appearance);
    if (appearance.bg_color) {
      let thisBgColor = setTheme(appearance.bg_color ?? "light");
      setBgColor(thisBgColor);
    }
  }, [appearance]);

  const setInitialState = (data) => {
    dispatch({
      type: "setLinks",
      data: data.links,
    });

    if (data.appearance) {
      dispatch({
        type: "setAppearance",
        data: data.appearance,
      });
    } else {
      console.log("data.appearnace is null!!!");
    }
  };

  useEffect(() => {
    console.log("visitor ? ", username ? true : false);
    if (visitor) {
      getData(username)
        .then((data) => {
          console.log("YouriLink - username useEffect - triggered");
          console.log(data);
          setInitialState(data);
        })
        .then(setLoading(false))
        .catch((e) => console.log(e));
    } else {
      console.log("useEffect- token", token);
      getData(token) //
        .then((data) => {
          console.log("YouriLink - token useEffect - triggered");
          setInitialState(data);
          setVisitor(false);
        })
        .then(setLoading(false))
        .catch((e) => console.log(e));
    } // eslint-disable-next-line
  }, [visitor, username, token]);

  const setTheme = (theme) => {
    console.log("setTheme function triggered");
    switch (theme) {
      case "light":
        return `linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)`;
      case "dark":
        return `lrinear-gradient(315deg, #485461 0%, #28313b 74%)`;
      case "colourful":
        return `linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)`;
      case "pink":
        return `linear-gradient(150deg, #e96196 0%, #ffffff 99%)`;
      case "blue":
        return `linear-gradient(150deg, #d5fefd 70%, #fffcff 99%)`;
      case "green":
        return `linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)`;
      default:
        throw Error(`unknown theme ${theme}`);
    }
  };

  return (
    <>
      {loading ? (
        <h1> this is loading </h1>
      ) : (
        <YouriLinkContainer sx={{ background: bgColor }}>
          <Card />
        </YouriLinkContainer>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default YouriLink;
