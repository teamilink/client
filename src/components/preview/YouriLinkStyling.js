import { styled } from "@mui/system";

export const YouriLinkContainer = styled("div")({
  width: "100vw",
  height: "100%",
  margin: "0",
  padding: "0",
  overflowY: "auto",
  position: "absolute",
  top: "0",
  left: "0",
});

export const LoadingSpinner = styled("div")({
  width: "1.2em",
  height: "1.2em",
  borderRadius: "50%",
  border: "0.2em solid #a8b3bd",
  borderTop: "0.2em solid #cad3db",

  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  animation: "spin 2s linear infinite",
  zIndex: "1001",
  position: "absolute",
  top: "1em",
  left: "1em",
});
