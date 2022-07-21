import { styled } from "@mui/system";

export const BodyContainer = styled("div")({
  backgroundColor: "yellow",
  width: "100vw",
  height: "100vh",
  margin: "0",
  padding: "0",
});
export const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "3rem auto",
  width: "600px",
  height: "100vh",
  alignItems: "center",
  backgroundColor: "aqua",
});

export const ProfileImg = styled("img")({
  width: "120px",
  height: "120px",
  border: "1px solid black",
  borderRadius: "50%",
});

export const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  height: "30%",
  justifyContent: "space-around",
});

export const Btn = styled("button")({
  width: "100%",
  height: "3rem",
  fontSize: "1.5rem",
  backgroundColor: "transparent",
  border: "1px solid black",
  cursor: "pointer",
});

// <BodyContainer>
//   <CardContainer>
//     <ProfileImg alt="profile" src="/images/profile_default.jpeg" />
//     <h1>{bio.profile_title}</h1>
//     <p>{bio.bio}</p>
//     <ButtonContainer>
//       {links &&
//         links.map((link) => (
//           <a href={link.link_address} target="_blank" rel="noreferrer">
//             <Btn key={link.id}>{link.title}</Btn>
//           </a>
//         ))}
//     </ButtonContainer>
//   </CardContainer>
// </BodyContainer>
