import React from "react";
import { useGlobalState } from "../utils/LinkContext";
import LinkForm from "./LinkForm";

const LinkFormList = () => {
  // const { initialFormState } = useGlobalState();
  // console.log(Object.keys(initialFormState));

  const index = [0, 1, 2];

  return (
    <div className="link-form-lisk">
      {/* {Object.values(initialFormState).map((item, key) => (
        <LinkForm eachFormData={item} key={key} />
      ))} */}

      {index.map((num, key) => (
        <LinkForm index={num} key={key} />
      ))}
    </div>
  );
};

export default LinkFormList;
