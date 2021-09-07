
import classes from "./Input.module.css";

const Input = (props) => {
  const {onChange, value} = props;
  return (
    
      <textarea
      value= {value}
        onChange={(e)=>onChange(e.target.value)}
        type="text"
        className={classes.input}
        cols="20"
        rows="3"
        maxLength="180"
        required
        placeholder="Type your review!"
      />
    
  );
};

export default Input;
