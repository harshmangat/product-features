import { Fragment } from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <Fragment>
      <button className={classes.button}>Submit</button>
    </Fragment>
  );
};

export default Button;
