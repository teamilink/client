import React from "react";
import { Button } from "@mui/material";

const Buttons = ({ id, onDelete }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onDelete(e.currentTarget.id);
  };
  return (
    <div id="link-form-submit">
      {id ? (
        <>
          <Button variant="text" type="button" color="secondary">
            Update
          </Button>
          <Button
            variant="text"
            type="submit"
            color="secondary"
            name={id}
            id={id}
            onClick={handleClick}
          >
            Delete
          </Button>
        </>
      ) : (
        <>
          <Button variant="text" type="submit" color="secondary">
            Save
          </Button>
          <Button variant="text" type="reset" color="secondary">
            Clear
          </Button>
        </>
      )}
    </div>
  );
};

export default Buttons;
