import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <textarea
        ref={ref}
        type="text"
        className={classes.input}
        cols="20"
        rows="3"
        maxLength="180"
        required
        placeholder="Type your review!"
      ></textarea>
    </Fragment>
  );
});

export default Input;
