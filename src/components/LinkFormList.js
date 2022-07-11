import React from "react";
import { useGlobalState } from "../utils/LinkContext";
import LinkForm from "./LinkForm";

const LinkFormList = () => {
  // const { initialFormState } = useGlobalState();

  return (
    <div className="link-form-lisk">
      {/* {initialFormState.map((item, key) => (
        <LinkForm eachForm={item} key={key} />
      ))} */}
      <LinkForm />
    </div>
  );
};

export default LinkFormList;
