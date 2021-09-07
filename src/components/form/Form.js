import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import classes from './Form.module.css';
import Input from './Input';

const Form = (props) => {
  // const [enteredInput, setEnteredInput] = useState('');
  const inputRef = useRef();
  
  // const inputChangeHandler = (event)=>{
  //   setEnteredInput(event.target.value);
    // console.log(enteredInput);
  // }

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredInput= inputRef.current.value
    // setEnteredInput(inputChangeHandler)
    props.onAddNewPost(enteredInput.text);
    
  }

  return(
    <form className={classes.form} onSubmit={submitHandler}>
     <Input ref={inputRef} value={props.text} text={props.text}/>
      <Button />
    </form>
  );
};

export default Form;
