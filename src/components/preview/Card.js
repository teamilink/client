import React from "react";
import { useGlobalState } from "../../utils/stateContext";
import {
  CardContainer,
  Box,
  Profile,
  LetterProfile,
  Text,
  Title,
  Bio,
  LinkButtons,
  Alink,
  Btn,
} from "./CardStyling";

const Card = () => {
  const { store } = useGlobalState();
  const { links, appearance, loggedInUser } = store;
  console.log("card links", links);
  console.log("card appearance", appearance);

  return (
    <CardContainer>
      <Box>
        {appearance && (appearance.picture_url || appearance.bg_image_url) ? (
          <Profile
            alt="profile"
            src={
              (appearance.picture_url && appearance.picture_url) ||
              (appearance.bg_image_url && appearance.bg_image_url)
            }
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
