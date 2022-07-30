import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/linksServices";
import Footer from "../Footer";
import { useGlobalState } from "../../utils/stateContext";
import CardMui from "./iframe-test/CardMui";
import { styled } from "@mui/system";

const YouriLinkContainer = styled("div")({
  width: "100vw",
  height: "100%",
  margin: "0",
  padding: "0",
  overflowY: "auto",
  position: "absolute",
  top: "0",
  left: "0",
});

const YouriLink = () => {
  const { username } = useParams();

  const { store, dispatch } = useGlobalState();
  const { token, links, appearance } = store;

  console.log("******* check state ************");
  console.log("links", links);
  console.log("appearance", appearance);

  const [loading, setLoading] = useState(true);
  const [visitor, setVisitor] = useState(username ? true : false);
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    console.log("useEffect - thisBgColor");
    const thisBgColor = setTheme(appearance.bg_color ?? undefined);
    console.log(thisBgColor);
    setBgColor(thisBgColor);
  }, [appearance.bg_color]);

  useEffect(() => {
    console.log("visitor ? ", username ? true : false);
    if (visitor) {
      getData(username)
        .then((data) => {
          console.log("YouriLink - username useEffect - triggered");
          console.log(data);
          dispatch({
            type: "setLinks",
            data: data.links,
          });
          dispatch({
            type: "setAppearance",
            data: data.appearance,
          });
        })
        .then(setLoading(false))
        .catch((e) => console.log(e));
    } else {
      console.log("useEffect- token", token);
      getData(token) //
        .then((data) => {
          console.log("YouriLink - token useEffect - triggered");
          console.log(data);

          console.log("YouriLink - request dashboard data");
          dispatch({
            type: "setLinks",
            data: data.links,
          });
          dispatch({
            type: "setAppearance",
            data: data.appearance,
          });

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
      case undefined:
        // return `#fff`;
        return `linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)`;
      default:
        throw Error(`unknown theme ${theme}`);
    }
  };

  return (
    <YouriLinkContainer sx={{ background: bgColor }}>
      {loading ? (
        <h1> this is loading </h1>
      ) : (
        // <YouriLinkContainer sx={{ background: bgColor }}>
        <CardMui visitor={visitor} />
        // </YouriLinkContainer>
      )}
      {/* <Footer /> */}
    </YouriLinkContainer>
  );
};

export default YouriLink;
