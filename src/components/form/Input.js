import { Fragment } from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <Fragment>
      <textarea
        className={classes.input}
        cols="20"
        rows="3"
        maxLength="180"
        required
        placeholder="Type your review!"
      ></textarea>
    </Fragment>
  );
};

export default Input;
