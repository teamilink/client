import React from "react";
import LinkForm from "./LinkForm";

const LinkFormList = () => {
  // const id = [1, 2, 3];
  return (
    <div className="link-form-lisk">
      {/* {id.map((item) => (
        <LinkForm id={item} key={item} />
      ))} */}
      <LinkForm />
      <LinkForm />
      <LinkForm />
    </div>
  );
};

export default LinkFormList;
