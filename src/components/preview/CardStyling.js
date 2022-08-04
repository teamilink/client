import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardContainer = styled("div")({
  width: "100%",
  height: "100%",
});

export const Box = styled("div")({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",

  margin: "1.5rem auto",
  padding: "24px 12px",
});

export const Profile = styled("img")({
  width: "120px",
  height: "120px",
  // overflow: "hidden",
  objectFit: "cover",
  border: "3px solid #000",
  borderRadius: "50%",
});

export const LetterProfile = styled("div")({
  width: "120px",
  height: "120px",
  backgroundColor: "rgb(24, 37, 73)",
  borderRadius: "50%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "3rem",
  fontWeight: "500",
  color: "#fff",
});

export const Text = styled("div")({
  margin: "2rem auto 3rem",
  textAlign: "center",
  maxWidth: "30rem",
});

export const Title = styled(Typography)({
  fontSize: "1.5rem",
  margin: 0,
});

export const Bio = styled(Typography)({
  width: "100%",
  margin: "0",
});

export const LinkButtons = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "50%",
});

export const Alink = styled("a")({
  marginBottom: "1rem",
});

export const Btn = styled("button")({
  width: "300px",
  height: "100%",
  padding: "0.8rem",
  fontSize: "1.2rem",
  fontWeight: "bold",

  backgroundColor: "#fff",
  border: "2.5px solid #000",
  borderRadius: "0.5rem",
  boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
  cursor: "pointer",
});
