import { saveAppearance } from "../services/appearanceServices";
import { saveLink } from "../services/linksServices";

export const onSubmitAppearance = () => {
  saveAppearance();
};

export const handleLinkAdd = (link) => {
  saveLink(link).then((response) => {
    console.log(response);
    // dispatch({
    //   type: "addLink",
    //   data: response,
    // });
    // setLinks([...links, response]);
  });
};
