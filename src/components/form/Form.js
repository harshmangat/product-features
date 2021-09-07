import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import Input from "./Input";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const { onNewPost } = props;

  const [enteredInput, setEnteredInput] = useState(props.title);
  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      title: enteredInput,
      id: uuid(),
    };
    onNewPost(newPost);
    setEnteredInput('');
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input onChange={setEnteredInput} value={enteredInput} />
      <Button />
    </form>
  );
};

export default Form;