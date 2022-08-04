import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getData } from "../../services/linksServices";
// import Footer from "../Footer";
import { useGlobalState } from "../../utils/stateContext";
import Card from "./Card";
import {
  YouriLinkContainer,
  LoadingSpinner,
  ErrorContainer,
} from "./YouriLinkStyling";

const YouriLink = () => {
  console.log("YouriLink");
  const { username } = useParams();
  const { store, dispatch } = useGlobalState();
  const { token, appearance } = store;
  const location = useLocation();
  let locPathname = location.pathname;

  const [loading, setLoading] = useState(true);
  // const [visitor, setVisitor] = useState(username ? true : false);
  const [bgColor, setBgColor] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    console.log("useEffect - thisBgColor");
    console.log(appearance);
    if (appearance.bg_color) {
      let thisBgColor = setTheme(appearance.bg_color ?? "");
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
    console.log("your location is", locPathname);
    console.log("your username is", username);
    setLoading(true);
    if (
      locPathname === "/dashboard" ||
      locPathname === "/dashboard/appearance"
    ) {
      console.log("useEffect- token", token);
      getData(token) //
        .then((data) => {
          console.log("YouriLink - token");
          setInitialState(data);
          // setVisitor(false);
        })
        .then(setLoading(false))
        .catch((e) => console.log(e));
    } else if (
      locPathname !== "/dashboard" &&
      locPathname !== "/dashboard/appearance"
    ) {
      getData(username)
        .then((data) => {
          console.log("YouriLink - username");
          data.error ? setErr(data.error) : setInitialState(data);
        })
        .then(setLoading(false))
        .catch((e) => console.log(e));
    } // eslint-disable-next-line
  }, [locPathname]);

  const setTheme = (theme) => {
    console.log("setTheme function triggered");
    switch (theme) {
      case "light":
        return `linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%)`;
      case "dark":
        return `linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);`;
      case "colourful":
        return `linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)`;
      case "pink":
        return `linear-gradient(150deg, #e96196 0%, #ffffff 99%)`;
      case "blue":
        return `linear-gradient(150deg, #d5fefd 70%, #fffcff 99%)`;
      case "green":
        return `linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)`;
      default:
        return `white`;
    }
  };

  return (
    <>
      {err ? (
        <ErrorContainer>
          <Typography variant="h4" gutterBottom component="div" align="center">
            {err}
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Want this to be your username?{" "}
            <Link to="/signup">Create your iLink now.</Link>
          </Typography>
        </ErrorContainer>
      ) : loading ? (
        <LoadingSpinner></LoadingSpinner>
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
