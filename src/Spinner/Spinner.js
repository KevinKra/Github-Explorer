import React, { Fragment } from "react";
import spinner from "./Spinner.svg";
export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ height: "75px", width: "75px" }}
      />
    </Fragment>
  );
};
