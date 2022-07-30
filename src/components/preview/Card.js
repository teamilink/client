import { Typography } from "@mui/material";
import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import { styled } from "@mui/system";

const CardContainer = styled("div")({
  width: "100%",
  height: "100%",
});

const Box = styled("div")({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",

  margin: "1.5rem auto",
  padding: "24px 12px",
});

const Profile = styled("img")({
  width: "120px",
  height: "120px",
  border: "3px solid #000",
  borderRadius: "50%",
});

const LetterProfile = styled("div")({
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

const Text = styled("div")({
  margin: "2rem auto 3rem",
  textAlign: "center",
  maxWidth: "30rem",
});

const Title = styled(Typography)({
  fontSize: "1.5rem",
  margin: 0,
});

const Bio = styled(Typography)({
  width: "100%",
  margin: "0",
});

const LinkButtons = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "50%",
});

const Alink = styled("a")({
  marginBottom: "1rem",
});

const Btn = styled("button")({
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

const Card = () => {
  const { store } = useGlobalState();
  const { links, appearance, loggedInUser } = store;
  console.log("card links", links);
  console.log("card appearance", appearance);

  return (
    <CardContainer>
      <Box>
        {appearance && appearance.picture_url ? (
          <Profile
            alt="profile"
            src={appearance.picture_url ? appearance.picture_url : ""}
          />
        ) : (
          <LetterProfile>
            {loggedInUser ? loggedInUser.charAt(0).toUpperCase() : "A"}
          </LetterProfile>
        )}
        <Text>
          <Title>{appearance.profile_title}</Title>
          <Bio>{appearance.bio}</Bio>
        </Text>
        <LinkButtons>
          {links &&
            links.map((link) => (
              <Alink
                key={link.id}
                href={link.link_address}
                target="_blank"
                rel="noreferrer"
              >
                <Btn key={link.id}>{link.title}</Btn>
              </Alink>
            ))}
        </LinkButtons>
      </Box>
    </CardContainer>
  );
};

export default Card;
