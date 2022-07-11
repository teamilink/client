import { createContext, useContext } from "react";

export const LinkContext = createContext();
export const useGlobalState = () => useContext(LinkContext);
